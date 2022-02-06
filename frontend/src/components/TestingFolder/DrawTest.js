import Paper from 'paper';

var hitOptions = {
  segments: true,
  stroke: true,
  fill: true,
  tolerance: 5
}

const DrawTest = () => {

  // Paper.settings.handleSize = 10;
  let myPath = new Paper.Path();
  myPath.onMouseEnter = (event) => {
    console.log('enter')
    myPath.fullySelected = true
  }
  myPath.onMouseLeave = (event) => {
    console.log('leave')
    myPath.fullySelected = false
  }

  let myCircle = new Paper.Path.Circle({
    center: Paper.view.center,
    radius: 30,
    strokeColor: 'black',
  });


  var tool = new Paper.Tool();


  var segment, path;
  var movePath = false
  Paper.view.onMouseDown = (event) => {
    segment = path = null;
    console.log('mouse down here')
    // check what this is
    var hit = Paper.project.hitTest(event.point, hitOptions);


    if(hit){
      if(hit.location){
          var curve = hit.location.curve;
      }

      if(hit.type === "segment"){
        segment = hit.segment
      } else if(hit.type === "stroke"){
        // var location = hit.location;
        // segment = path.insert(location.index + 1, event.point);
        // path.smooth()
      }
      console.log(hit.item, hit.type)
    }

    else {
      myPath.strokeColor = "black";
      myPath.strokeWidth = 3;

    }

  };

  Paper.view.onMouseDrag = (event) =>{
    if(segment){
      console.log(segment.point)
      console.log(event.delta)
      segment.point.set(event.point)
      myPath.smooth()
    } else if(path){
      // path.position += event.delta;
    } else {
        myPath.add(event.point);
    }

  }

  Paper.view.onMouseUp = (event) => {
    console.log('on lift pen')
    myPath.simplify()
    myPath.fullySelected = true;
  }

  Paper.view.onMouseMove = (event) => {
    console.log('move mouse')
    var hit = Paper.project.hitTest(event.point)

    if(hit && hit.location){
      var curve = hit.location.curve;
      curve.fullySelected = true
    }


    // var radius = 1;
    // if(event.delta !== null){
    //   console.log(event.delta.length)
    //   radius = event.delta.length
    // }
    //
    // var path = new Paper.Path.Circle({
    //   center: event.point,
    //   radius: radius
    // })
    // path.fillColor = {
    //   hue:event.count *3,
    //   saturation: 1,
    //   brightness:1
    // }


    // return false;
  }


  Paper.view.draw();
}

export default DrawTest;
