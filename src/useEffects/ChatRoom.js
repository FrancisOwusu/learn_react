import { useEffect, useRef } from "react";
import { createConnection } from "./Chat";
const connectionRef = useRef(null);
export default function ChatRoom() {
  useEffect(() => {
    // const connection = createConnection();
    // connection.connect();

    //This wont fix the bug!!!
    if (!connectionRef.current) {
      connectionRef.current = createConnection();
      connectionRef.current.connect();
    }

    // const map = mapRef.current;
    // map.setZoomLevel(zoomLevel);
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
