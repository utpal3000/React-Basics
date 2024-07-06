import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("aqua");

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
        <h1 className="text-center pt-40 text-4xl text-slate-100 ">
          <div className="text-5xl font-bold">BG Color Changer</div>
        </h1>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-100 shadow-lg"
            style={{ backgroundColor: "#FFD700" }}
            onClick={() => {
              setColor("#FFD700");
            }}
            // onClick needs a call back function/ function, not its ref. or return value of function
            // setColor is a function where u pass the color name as variable
          >
            Gold
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-100 shadow-lg mx-2"
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-100 shadow-lg mx-2"
            style={{ backgroundColor: "#56cbf9" }}
            onClick={() => {
              setColor("#56cbf9");
            }}
          >
            Blue
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-100 shadow-lg mx-2"
            style={{ backgroundColor: "#00A693" }}
            onClick={() => {
              setColor("#00A693");
            }}
          >
            Green
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-800 shadow-lg mx-2"
            style={{ backgroundColor: "#FBAED2" }}
            onClick={() => {
              setColor("#FBAED2");
            }}
          >
            Pink
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-100 shadow-lg mx-2"
            style={{ backgroundColor: "#FF5800" }}
            onClick={() => {
              setColor("#FF5800");
            }}
          >
            Orange
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-100 shadow-lg mx-2"
            style={{ backgroundColor: "#DC143C" }}
            onClick={() => {
              setColor("#DC143C");
            }}
          >
            Red
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-800 shadow-lg mx-2"
            style={{ backgroundColor: "#FEFEFA" }}
            onClick={() => {
              setColor("#FEFEFA");
            }}
          >
            White
          </button>
          <button
            className="gap-2 px-4 rounded-3xl p-1 m-1 text-slate-100 shadow-lg mx-2"
            style={{ backgroundColor: "#242124" }}
            onClick={() => {
              setColor("#242124");
            }}
          >
            Black
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
