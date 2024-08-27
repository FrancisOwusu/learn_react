import logo from "./logo.svg";
import "./App.css";
import { sculptureList } from "./data";
import { useState } from "react";
import Gallery from "./Gallery";
import MovingDot from "./MovingDot";
import FeedbackForm from "./FeedbackForm";
import Form from "./Form";
import Menu from "./Menu";
import TravelPlan from "./TravelPlan";

export default function App() {
  return (
    <div className="Page">
    <h3>Avoid redundant state</h3>
    <Form />
      <h3>Using State In feedback form</h3>
      <FeedbackForm />
      <h3>Using State In Gallery</h3>
      <Gallery />
      <Gallery />
      <h3>State Structure Example</h3>
      <MovingDot />

      <h3>Avoid duplication in state</h3>
      <Menu />
      <h3>Avoid deeply nested state</h3>
      {/* <TravelPlan /> */}
    </div>
  );
  // const [index,setIndex] = useState(0);
  // const [showMore,setShowMore] = useState(false);

  // function handleClick() {
  //   // index = index + 1;
  //   setIndex(index + 1);
  // }
  // function handleNextClick() {
  //   setIndex(index + 1);
  // }

  // function handleMoreClick(){
  //   setShowMore(!showMore);
  // }

  // let sculpture = sculptureList[index];

  // return (
  //   <div className="App">
  //   <h3>SET STATE USING SETINDEX</h3>
  //     <button onClick={handleClick}>Next</button>
  //     <h2>
  //       <i>{sculpture.name}</i> by {sculpture.artist}
  //     </h2>
  //     <h3>
  //       ({index + 1} of {sculptureList.length})
  //     </h3>
  //     <img src={sculpture.url} alt={sculpture.alt}></img>
  //     <p>{sculpture.description}</p>

  //     <h3>SET STATE USING SHOW MORE</h3>
  //     <button onClick={handleNextClick}>Next</button>
  //     <h2>
  //       <i>{sculpture.name}</i> by {sculpture.artist}
  //     </h2>
  //     <h3>
  //       ({index + 1} of {sculptureList.length})
  //     </h3>
  //     <button onClick={handleMoreClick}>{showMore? 'Hide':'Show'}details</button>{showMore && <p>{sculpture.description}</p>}
  //     <img src={sculpture.url} alt={sculpture.alt}></img>
  //     <p>{sculpture.description}</p>
  //   </div>
  // );
}
