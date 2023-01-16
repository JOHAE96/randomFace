import React, { useRef, useEffect } from "react";
import Paper from "paper";

var values = {
	paths: 50,
	minPoints: 5,
	maxPoints: 15,
	minRadius: 30,
	maxRadius: 90
};


function createBlob(center, maxRadius, points) {
	var path = new Paper.Path();
	path.closed = true;
	for (var i = 0; i < points; i++) {
		var delta = new Paper.Point({
			length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
			angle: (360 / points) * i
		});
		path.add(center + delta);
	}
	path.smooth();
	return path;
}



function createFace(){
  const rectangle = new Paper.Path.Rectangle(new Paper.Point(60, 40), new Paper.Size(200 , 200));
  rectangle.fillColor = 'blue';
}

function createEyes(){
  const height = 90;
  const eyeSize = 10;
  const  leftEye = new Paper.Path.Circle(new Paper.Point(100, height), eyeSize);
  leftEye.fillColor = 'black';
  const  rightEye = new Paper.Path.Circle(new Paper.Point(200, height), eyeSize);
  rightEye.fillColor = 'black';
}
function createNose(){
  const rectangle = new Paper.Path.Rectangle(new Paper.Point(160, 140), new Paper.Size(10 , 20));
  rectangle.fillColor = 'red';
}
function createMouth(){
  const rectangle = new Paper.Path.Rectangle(new Paper.Point(100, 200), new Paper.Size(60 , 10));
  rectangle.fillColor = 'red';
}

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    createFace();
    createEyes();
    createNose();
    createMouth();
  }, []);

  return <canvas ref={canvasRef} {...props} id="canvas" resize="true" />;
};

export default Canvas;
