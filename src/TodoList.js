export default function TodoList() {
  const imageSrc = "https://i.imgur.com/yXOvdOSs.jpg";
  const className = "photo";
  const imgAlt = "Hedy Lamarr";
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    image:{
        src:imageSrc,
        alt:imgAlt,
        class:className
    }
  };
  return (
    <>
      <h1>{person.name}</h1>
      <div style={person.theme}>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      </div>
      <img src={person.image.imageSrc} alt={person.image.className} className={imgAlt} />
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <strong>Date: {formatDate(today)}</strong>
    </>
  );
}
