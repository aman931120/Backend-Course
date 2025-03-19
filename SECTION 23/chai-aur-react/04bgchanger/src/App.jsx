import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [displayedColor,setdisplayedColor] = useState("olive")

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{ backgroundColor: color }}
      >
        <div className="text-center py-70">This is {displayedColor} color</div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button
            onClick={() => {
              setColor("red");
              setdisplayedColor("red");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => {
              setColor("green");
              setdisplayedColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => {
              setColor("brown");
              setdisplayedColor("brown");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>

          <button
            onClick={() => {
              setColor("orange");
              setdisplayedColor("orange");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => {
              setColor("purple");
              setdisplayedColor("purple");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
