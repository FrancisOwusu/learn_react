import { useEffect, useRef } from "react";
import { createConnection } from "./Chat";
const connectionRef = useRef(null);
const dialogRef=useEffect(null);
export default function ChatRoom() {
  useEffect(() => {
    // const connection = createConnection();
    // connection.connect();

    //This wont fix the bug!!!
    if (!connectionRef.current) {
      connectionRef.current = createConnection();
      connectionRef.current.connect();
    }
//model
// const dialog = dialogRef.current;
// dialog.showModal();
// return () => dialog.close();



function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
    // const map = mapRef.current;
    // map.setZoomLevel(zoomLevel);
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
