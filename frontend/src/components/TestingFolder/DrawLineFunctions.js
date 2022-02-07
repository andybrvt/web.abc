import Paper from 'paper';

var hitOptions = {
  segments: true,
  stroke: true,
  fill: true,
  tolerance: 10
}

export const DrawLineFunctions = () => {
  Paper.settings.handleSize = 10
  var myPath = new Paper.Path();
  var path; // to see if you are currently in a path
  var move; // to see if you are trying to place a line
  var tempPoint; // to hold the temp point
  var segment; // to see if you have a segment of the line


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

  Paper.view.onMouseDown = (event) => {

    var hit = Paper.project.hitTest(event.point, hitOptions)

    segment = null
    if(hit && !path){
      console.log('it is hit')

      if(hit.type === "segment"){
        segment = hit.segment
      }

    } else{

      if(!path){
        var newPath = createNewPath();
        path = newPath;
        path.add(event.point)
        move = true;
      } else {

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
    if(segment){
      segment.point.set(event.point)
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
    console.log(event.key)
    if(event.key === "escape"){
      if(path && move){
        path.lastSegment.remove()
        path = null;
        move = null;
        tempPoint = null;
      }
    }

  }

  Paper.view.draw();


}
