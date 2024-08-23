import { people } from "./data.js";
import { getImageUrl } from "./util";

const people1 = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];
/*
export default function ItemList() {
  const listItem = people.map((person,index) => <li>{person}</li>);

  return listItem;
}*/
export default function ItemList() {
  const chemist = people.filter((person) => person.profession === "chemist");
  const listItems = chemist.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
