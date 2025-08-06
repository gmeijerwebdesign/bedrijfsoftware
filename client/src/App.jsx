import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [res, setRes] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_CONNECTION_LOCAL);
        const json = await response.json();
        setRes(JSON.stringify(json));
        console.log(json);
      } catch (error) {
        console.error("Fout bij ophalen data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
