function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function CustomButton({onSmash,children}){
  return(<button onClick={onSmash}>{children}</button>);
}


export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <>
    {/* Custom buttons implementation */}
    <CustomButton onSmash={()=>alert('Playing !!!')}>Play more</CustomButton>
    <CustomButton onSmash={()=>alert('Uploading !!!')}>Upload Image</CustomButton>
    
    <AlertButton message="Playing">Play Movie</AlertButton>
    <AlertButton message="Uploading">Upload Image</AlertButton>
    
    <button onClick={handleClick}>
      Click me
    </button>
    </>
  );
}
