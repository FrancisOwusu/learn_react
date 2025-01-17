import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Profile from "./Profile";
import TodoList from "./TodoList";
import SecondProfile from "./SecondProfile";
import Avatar from "./Avatar";
import PackingList from "./ParkingList";
import ItemList from "./RenderingList";
import RecipeList from "./RecipeList";
import Button from "./Button";
import ToolbarToolbar from "./Toolbar";
import Signup from "./FormSubmit";
import Toolbar2 from "./ToolBar2";
import Picture from "./Picture";
import FilterableList from "./FilterableList";
import Accordion from "./Accordion";
import SyncedInputs from "./SynchInput";
import DisplayCounter from "./DisplayCounter";
import DisplayCounter2 from "./DisplayCounter2";
import DisplayCounter3 from "./DisplayCounter3";
import DisplayCounter4 from "./DisplayCounter4";
import Scoreboard from "./ScoreBoard";
import ContactList from "./chat_project/ContactList";
import { contacts } from "./chat_project/contacts";
import Chat from "./chat_project/Chat";
import TaskApp from "./TaskApp";
import TaskApp1 from "./taskAppWithReducer";
import TaskAppWithImmerReducer from "./TaskAppWithImmerReducer.js";
function MyButton() {
  return <button>I'm a button</button>;
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === "tea" ? "leaf" : "bean"}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd>
        <dt>Age</dt>
        <dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

export default function MyApp() {
  //add counter
  const [showB, setShowB] = useState(true);
  const counter = <DisplayCounter />;
  const [to, setTo] = useState(contacts[0]);
  console.log(contacts[0]);
  return (
    <div>
      <h1>Welcome to my app</h1>
      <h3>First Profile</h3>
      <Profile />

      <h3>Second Profile</h3>
      <SecondProfile />
      <Gallery />
      {/* <MyButton /> */}
      <h3>Show Card</h3>
      {/* <Card>
        <Avatar
          size={100}
          person={{ name: "Katsuko Saruhasi", imageId: "Yfe)qp2" }}
        />
      </Card>
      <TodoList /> */}
      {/* Color management */}
      {/* <PackingList />
     <DrinkList />
     <h3>Item List</h3> */}
      {/* Rendering list */}
      {/* <ItemList />
     <RecipeList />
     <Button />
     <ToolbarToolbar />
     <Signup /> */}
      <h3>Tool bar 2</h3>
      <Toolbar2
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <Picture />
      <FilterableList />
      <Accordion />
      <SyncedInputs />

      <h3>Display Counter</h3>
      <DisplayCounter />

      {showB && <DisplayCounter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        Render the second counter
      </label>

      <h3>Display Counter 2</h3>
      <DisplayCounter2 />

      <h3>Display Counter 3</h3>
      <DisplayCounter3 />

      <h3>Display Counter 4</h3>
      <DisplayCounter4 />

      <h3>Display Scoreboard</h3>
      <Scoreboard />
      <br />
      <h3>Preserving and resetting state </h3>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat contact={to} />
      <h3>Task App</h3>
      <TaskApp />
      <h3>Task App With Reducer</h3>
      <TaskApp1 />
      <h3>Task App With Immer Reducer</h3>
     <TaskAppWithImmerReducer />
    </div>
  );
}
