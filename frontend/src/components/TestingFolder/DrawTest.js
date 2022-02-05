import Paper from 'paper';


const DrawTest = () => {
  let myPath = new Paper.Path();


  Paper.view.onMouseDown = (event) => {
    console.log('mouse down here')
    myPath.strokeColor = "black";
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (event) =>{
    myPath.add(event.point);
  }

  Paper.view.draw();
}

export default DrawTest;
