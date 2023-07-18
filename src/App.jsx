import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-500 h-80 items-center flex justify-center flex-col font-extrabold text-4xl text-white rounded-3xl border border-black hover:text-red-400 cursor-pointer"> 
        <h1>Name : Mursalin Hossain</h1>
        <h1>Name : Put ur name here...</h1>
        <p>Second Name : Abdullah Al Noman</p>
      </div>
    </>
  );
}

export default App;
