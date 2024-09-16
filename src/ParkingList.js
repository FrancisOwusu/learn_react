function Item({ name, isPacked }) {
  //use of DRY
  //return <li className="item">{isPacked ? name + " ✔" : name}</li>;
  //Now let’s say you want to wrap the completed item’s text into another HTML tag
  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}
function Item1({ name, isPacked }) {
  if (isPacked) {
    //if you dont want to re
    // return null;
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}
export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </ul>
    </section>
  );
}
