import { getImageUrl } from "./util";
export default function Avatar({ person, size }) {
  return (
    <img
    className="avatar"
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
  />
  );
}