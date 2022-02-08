import Paper from 'paper';

var hitOptions = {
  segments: true,
  stroke: true,
  fill: true,
  handles: true,
  bounds: true,
  tolerance: 10
}

export const DrawLineFunctions = () => {
  Paper.settings.handleSize = 10

  // START HERE TOMORROW
  var makePath = true; // sub for button


  var path; // to see if you are currently in a path
  var move; // to see if you are trying to place a line
  var tempPoint; // to hold the temp point
  var segment; // to see if you have a segment of the line
  var previousPath; // keep track of the previous one
  var tempStroke;
  var tempBound;

  var showHandles = true; // sub for button
  var tempHandleIn;
  var tempHandleOut;

  var selectionRectangle = null;

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

    var b = bounds.clone().expand(10,10)
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
        previousPath = hit.item
        previousPath.fullySelected = true
        tempStroke = hit.item
        if(showHandles){
          setupHandles(hit.item)
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
    tempBound = null
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
        console.log(hit)
        if(hit.type === "bounds"){
          console.log('in here')
          console.log(hit)
          tempBound = hit.item
        }
        if(hit.type === "stroke"){
          previousPath = hit.item
          // previousPath.fullySelected = true

          tempStroke = hit.item
          // tempStroke.bounds.selected = true;
          initSelectionRectangle(hit.item)


        }
        else if(hit.type === "segment"){
          // if it is a segment, declare it so you can drag it
          segment = hit.segment
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

  Paper.view.onMouseDrag = (event) => {
    console.log('does it drag')
    console.log(tempBound)
    if(tempBound){
      console.log('boudn here')
      tempBound.point.set(event.point)
    }
    if(tempStroke){
      tempStroke.position = event.point
    }
    if(segment){
      segment.point.set(event.point)
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
