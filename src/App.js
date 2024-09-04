import React, { useSate, useEffect } from 'react';
import Gallery from "./Gallery";
import Profile from "./Profile";
import TodoList from "./TodoList";
import SecondProfile from "./SecondProfile";
import Avatar from "./Avatar";
import PackingList from './ParkingList';
import ItemList from './RenderingList';
import RecipeList from './RecipeList';
import Button from './Button';
import ToolbarToolbar from './Toolbar';
import Signup from './FormSubmit';
import Toolbar2 from './ToolBar2';
import Picture from './Picture';
import FilterableList from './FilterableList';
import Accordion from './Accordion';
import SyncedInputs from './SynchInput';


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
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
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
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
      <Picture />
      <FilterableList />
      <Accordion />
      <SyncedInputs />
    </div>
  );
}

