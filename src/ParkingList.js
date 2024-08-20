function Item({ name, isPacked }) {
    if(isPacked){
        //if you dont want to re
       // return null;
        // return <li className="item">{name} ✔</li>;
        //use of DRY
        return <li className="item">{isPacked?name + ' ✔' :name}</li>
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
