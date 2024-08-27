import logo from "./logo.svg";
import "./App.css";
import { sculptureList } from "./data";
import { useState } from "react";

export default function App() {
  const [index,setIndex] = useState(0);
  const [showMore,setShowMore] = useState(false);

  function handleClick() {
    // index = index + 1;
    setIndex(index + 1);
  }
  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick(){
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="App">
    <h3>SET STATE USING SETINDEX</h3>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt}></img>
      <p>{sculpture.description}</p>

      <h3>SET STATE USING SHOW MORE</h3>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>{showMore? 'Hide':'Show'}details</button>{showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt}></img>
      <p>{sculpture.description}</p>
    </div>
  );
}
