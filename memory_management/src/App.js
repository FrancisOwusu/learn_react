import logo from "./logo.svg";
import "./App.css";
import { sculptureList } from "./data";
import { useState } from "react";

export default function App() {
  const [index,setIndex] = useState(0);

  function handleClick() {
    // index = index + 1;
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="App">
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt}></img>
      <p>{sculpture.description}</p>
    </div>
  );
}
