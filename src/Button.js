function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}



export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <>
    <AlertButton message="Playing">Play Movie</AlertButton>
    <AlertButton message="Uploading">Upload Image</AlertButton>
    
    <button onClick={handleClick}>
      Click me
    </button>
    </>
  );
}
