import { getImageUrl } from "./util";
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.alt}
      width={size}
      height={size}
    />
  );
}
export default function SecondProfile() {
  return (
    <>
      <Avatar
        person={{ name: "Francis Osei Owusu", imageId: "1bX5QH6" }}
        size={100}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </>
  );
}
