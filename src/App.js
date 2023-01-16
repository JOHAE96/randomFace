import Canvas from "./Canvas";
import "./App.css";

function App() {
  return (
    <div className="App">
      myCanvas
      <Canvas id="myCanvas" resize></Canvas>
      belowCanvas
    </div>
  );
}

export default App;
