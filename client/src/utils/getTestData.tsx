import React, { useEffect, useState } from "react";

function GetTestData({ connectionString }) {
  const [res, setRes] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(connectionString);
        const json = await response.json();
        setRes(JSON.stringify(json));
        console.log(json);
      } catch (error) {
        console.error("Fout bij ophalen data:", error);
      }
    };
    fetchData();
  }, []);
  return null;
}

export default GetTestData;
