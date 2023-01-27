import React, { useRef, useEffect } from "react";
import Paper from "paper";

var values = {
  paths: 50,
  minPoints: 5,
  maxPoints: 15,
  minRadius: 30,
  maxRadius: 90,
};

function createBlob(center, maxRadius, points) {
  var path = new Paper.Path();
  path.closed = true;
  for (var i = 0; i < points; i++) {
    var delta = new Paper.Point({
      length: maxRadius * 0.5 + Math.random() * maxRadius * 0.5,
      angle: (360 / points) * i,
    });
    path.add(center + delta);
  }
  path.smooth();
  return path;
}

function createFace() {
  const rectangle = new Paper.Path.Rectangle(
    new Paper.Point(60, 40),
    new Paper.Size(200, 200)
  );
  rectangle.fillColor = "pink";
}
function createBody() {
  const rectangle = new Paper.Path.Rectangle(
    new Paper.Point(40, 300),
    new Paper.Size(230, 200)
  );
  rectangle.fillColor = "blue";
}

function createNeck() {
  const rectangle = new Paper.Path.Rectangle(
    new Paper.Point(125, 230),
    new Paper.Size(60, 70)
  );
  rectangle.fillColor = "lightpink";
}

function createHair() {
  const rectangle = new Paper.Path.Rectangle(
    new Paper.Point(55, 35),
    new Paper.Size(210, 20)
  );
  rectangle.fillColor = "brown";
}

function createEyes() {
  const height = 90;
  const eyeSize = 10;
  const leftEye = new Paper.Path.Circle(new Paper.Point(120, height), eyeSize);
  leftEye.fillColor = "black";
  const rightEye = new Paper.Path.Circle(new Paper.Point(200, height), eyeSize);
  rightEye.fillColor = "black";
}
function createNose() {
  const rectangle = new Paper.Path.Rectangle(
    new Paper.Point(160, 140),
    new Paper.Size(10, 20)
  );
  rectangle.fillColor = "red";
}
function createMouth() {
  const rectangle = new Paper.Path.Rectangle(
    new Paper.Point(130, 200),
    new Paper.Size(60, 10)
  );
  rectangle.fillColor = "red";
}

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    createNeck();
    createFace();
    createBody();
    createHair();
    createEyes();
    createNose();
    createMouth();
  }, []);

  return <canvas ref={canvasRef} {...props} id="canvas" resize="true" />;
};

export default Canvas;
