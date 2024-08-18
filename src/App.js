import Gallery from "./Gallery";

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
      <Gallery />
      <MyButton />
    </div>
  );
}
