import Gallery from "./Gallery";
import Profile from "./Profile";
import TodoList from "./TodoList";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Profile />
      <Gallery />
      {/* <MyButton /> */}
      <TodoList />
    </div>
  );
}
