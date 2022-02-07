import Paper from 'paper';

var hitOptions = {
  segments: true,
  stroke: true,
  fill: true,
  handles: true,
  tolerance: 10
}

export const DrawLineFunctions = () => {
  Paper.settings.handleSize = 10
  var myPath = new Paper.Path();
  var path; // to see if you are currently in a path
  var move; // to see if you are trying to place a line
  var tempPoint; // to hold the temp point
  var segment; // to see if you have a segment of the line
  var previousPath; // keep track of the previous one


  var showHandles = true; // just in case you pick the handles
  var tempHandleIn;
  var tempHandleOut;

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

  Paper.view.onMouseDown = (event) => {

    // check if this hits a segment or not
    var hit = Paper.project.hitTest(event.point, hitOptions)
    segment = null
    tempHandleIn = null
    tempHandleOut = null
    if(hit && !path){
      if(hit.type === "segment"){
        // if it is a segment, declare it so you can drag it
        segment = hit.segment
        console.log(segment.hasHandles(), 'has the handles here')

      }
      if(hit.type === "handle-out"){
        tempHandleOut = hit.segment
      }
      if(hit.type === "handle-in"){
        tempHandleIn = hit.segment
      }

    } else{

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


    }


  }

  Paper.view.onMouseDrag = (event) => {
    // to move the segment that you clicked on

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
        setupHandles(path)
        previousPath = path;
        path = null;
        move = null;
        tempPoint = null;
      }
    }

  }

  Paper.view.draw();


}
