import { useEffect, useState } from "react";

function App() {
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
      <div>
        <p className="text-red-500">{res}</p>
      </div>
    </>
  );
}

export default App;
