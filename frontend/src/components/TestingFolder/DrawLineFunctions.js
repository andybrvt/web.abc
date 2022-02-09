import Paper from 'paper';

var hitOptions = {
  segments: true,
  stroke: true,
  fill: true,
  handles: true,
  // bounds: true,
  tolerance: 5
}

export const DrawLineFunctions = () => {
  Paper.settings.handleSize = 5

  var tool = new Paper.Tool();
  // START HERE TOMORROW
  var makePath = true; // sub for button


  var path; // to see if you are currently in a path when making new line
  var move; // to see if you are trying to place a line
  var tempPoint; // to hold the temp point
  var segment; // to see if you have a segment of the line
  var previousPath; // keep track of the previous one
  var tempStroke;


  var showHandles = true; // sub for button
  var tempHandleIn;
  var tempHandleOut;

  var selectionRectangle = null;
  var selectionRectangleScale = null;
  var selectionRectangleScaleNormalized =null;
  var selectionRectangleRotation = null;

  var selectedPath = null; // whne you select a path

  const createNewPath = () => {
    var newPath = new Paper.Path();
    newPath.strokeColor = "black";
    newPath.strokeWidth = 5;
    return newPath
  }

  const setNewTempPoint = (newPoint) => {
    path.add(newPoint)
    tempPoint = path.lastSegment;
  }

  // this will set up the handles for the path
  const setupHandles = (path) => {

    // first get the segments
    let segs = path.segments; // array
    let nSegs = segs.length;
    if(nSegs < 2){
      return path;
    }

    // check if the segment has handles already
    const setHandles = (segment, which, vec) => {
      if(segment[which].length === 0){
        segment[which] = vec;
      }
    }

    // this is the last one
    let sPrev = segs[nSegs-1];
    for(let i = 0; i < nSegs; i++){
      let s = segs[i];
      // like a reflection on that point
      let vec = s.point.subtract(sPrev.point);
      vec = vec.normalize(vec.length/3);
      setHandles(s, "handleIn", vec.negate())
      setHandles(sPrev, 'handleOut', vec)
      sPrev = s;
    }



  }

  const initSelectionRectangle = (inPath) => {
    if(selectionRectangle !== null){
      selectionRectangle.remove();
    }

    // check if it is fresh
    var reset = inPath.rotation===0 && inPath.scaling.x===1 && inPath.scaling.y===1;
    var bounds;

    if(reset){
      console.log('reset')
      bounds = inPath.bounds;
      inPath.pInitialBounds = inPath.bounds;
    } else{
      console.log('no reset')
      bounds = inPath.pInitialBounds
    }

    var b = bounds.clone().expand(20,20)
    selectionRectangle = new Paper.Path.Rectangle(b);
    selectionRectangle.pivot = selectionRectangle.position;
    selectionRectangle.insert(2, new Paper.Point(b.center.x, b.top)); // top middle segment
    selectionRectangle.insert(2, new Paper.Point(b.center.x, b.top-25)); // top extend segment
    selectionRectangle.insert(2, new Paper.Point(b.center.x, b.top));

    if(!reset){
      selectionRectangle.position = inPath.bounds.center;
      selectionRectangle.rotation = inPath.rotation;
      selectionRectangle.scaling = inPath.scaling;
    }

    selectionRectangle.strokeWidth = 1;
    selectionRectangle.strokeColor = "blue";
    selectionRectangle.name = "selection rectangle";
    selectionRectangle.selected = true;
    selectionRectangle.ppath = inPath;
    selectionRectangle.ppath.pivot = selectionRectangle.pivot;

  }


  Paper.view.onDoubleClick = (event) => {
    var hit = Paper.project.hitTest(event.point, hitOptions)

    if(hit && !path){
      if(hit.type === "stroke"){

        if(hit.item.name !== 'selection rectangle'){
          previousPath = hit.item
          previousPath.fullySelected = true
          tempStroke = hit.item
          if(showHandles){
            setupHandles(hit.item)
          }
        }

      }
    }


  }

  Paper.view.onMouseDown = (event) => {
    // check if this hits a segment or not
    var hit = Paper.project.hitTest(event.point, hitOptions)
    segment = null
    tempHandleIn = null
    tempHandleOut = null
    tempStroke = null
    // if you are trying to make a path
    if(makePath){
      // if not make a new path
      if(!path){
        if(previousPath){
          previousPath.fullySelected = false;
        }
        var newPath = createNewPath();
        path = newPath;
        path.add(event.point)
        move = true;
      } else {
        // if path is already there try setting another one to
        // finish off the path
        if(tempPoint){
          tempPoint.remove()
          path.add(event.point)
          setNewTempPoint(event.point)
        }

        path.fullySelected= true;

      }


    } else {
    // if you are not trying to make a path
      if(hit && !path){

        var item = hit.item;

        if(hit.type === "stroke"){


          if(item.name!=="selection rectangle"){
            previousPath = hit.item
            tempStroke = hit.item
            initSelectionRectangle(hit.item)

          }


        }
        else if(hit.type === "segment"){
          // if it is a segment, declare it so you can drag it

          if(selectionRectangle !== null && item.name === "selection rectangle"){
            if(hit.segment.index >=2 && hit.segment.index <=4){
              // check to see if it is the rotator segment
              selectionRectangleRotation = 0;

            } else {
              // this is to scale
              selectionRectangleScale = event.point.subtract(selectionRectangle.bounds.center).length/item.scaling.x;


            }
          } else {
            segment = hit.segment
          }
        }
        else if(hit.type === "handle-out"){
          tempHandleOut = hit.segment
        }
        else if(hit.type === "handle-in"){
          tempHandleIn = hit.segment
        }

      } else {
        previousPath.fullySelected = false
      }


    }




  }

  tool.onMouseDrag = (event) => {

    if(selectionRectangleScale !== null){
      var ratio = event.point.subtract(selectionRectangle.bounds.center).length/selectionRectangleScale;
      var scaling = new Paper.Point(ratio, ratio)
      selectionRectangle.scaling = scaling;
      selectionRectangle.ppath.scaling = scaling;
      return

    }
    else if(selectionRectangleRotation !== null){

      var center = selectionRectangle.pivot;

      var baseVec = center.subtract(event.lastPoint);
      var nowVec = center.subtract(event.point);
      var angle = nowVec.angle - baseVec.angle;
      selectionRectangle.ppath.rotate(angle);
      selectionRectangle.rotate(angle);
      return;

    }

    if(tempStroke){
      tempStroke.position = event.point
    }
    if(segment){
      segment.point.set(event.point)
      previousPath.smooth()
      initSelectionRectangle(previousPath)
    }
    if(tempHandleIn){

      // You use subtract becuase the handles move from the
      // segment point and not the who global
      tempHandleIn.handleIn.set(event.point.subtract(tempHandleIn.point))

    }
    if(tempHandleOut){
      // You use subtract becuase the handles move from the
      // segment point and not the who global
      tempHandleOut.handleOut.set(event.point.subtract(tempHandleOut.point))
    }
  }

  Paper.view.onMouseUp = (event) => {
    selectionRectangleScale = null;
    selectionRectangleRotation = null;
  }

  Paper.view.onMouseMove = (event) => {
    if(path && move){
      if(!tempPoint){
        path.add(event.point)
        tempPoint = path.lastSegment
      }
      else {
        tempPoint.point.set(event.point)

      }
    }
  }

  Paper.view.onKeyDown = (event) => {

    // escape to finish up the line
    if(event.key === "escape"){
      if(path && move){
        path.lastSegment.remove()
        // Now set up all the handles for the path
        // because it is done now
        previousPath = path;
        path = null;
        move = null;
        tempPoint = null;
        makePath = false;
      }
    }

  }

  Paper.view.draw();


}
