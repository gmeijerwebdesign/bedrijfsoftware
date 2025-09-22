import React, { useState, useEffect } from "react";
import Topper from "../components/navigation/topper";
import DataTable from "../components/blocks/forms/form";

function Organisaties({ setCurrentTab }) {
  const [users, setUsers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [error, setError] = useState(null);
  const panel_indentifiers = [{ text: "Organisaties" }];
  const [currentPanel, setCurrentPanel] = useState("Organisaties");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, orgsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_CONNECTION_LOCAL}/users`),
          fetch(`${import.meta.env.VITE_API_CONNECTION_LOCAL}/organisations`),
        ]);

        if (!usersRes.ok || !orgsRes.ok) {
          throw new Error("HTTP error fetching data");
        }

        const usersData = await usersRes.json();
        const orgsData = await orgsRes.json();

        setUsers(usersData);
        setOrganisations(orgsData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  // kolommen voor DataTable
  const columns = [
    {
      header: "Titel",
      accessor: "title",
    },
    {
      header: "Medewerkers",
      render: (org) =>
        users.filter((u) => u.organisation_id === org.organisation_id).length,
    },
    {
      header: "Creator",
      render: () => "admin",
    },
    {
      header: "Acties",
      render: (org) => (
        <div>
          <button className="text-blue-600 hover:underline mr-2">
            Bewerken
          </button>
          <button className="text-red-600 hover:underline">Verwijderen</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Topper
        setCurrentPanel={setCurrentPanel}
        currentPanel={currentPanel}
        panels={panel_indentifiers}
      />

      <DataTable
        title="Organisaties"
        data={organisations || []}
        columns={columns}
        rowKey="organisation_id" // belangrijk
        selectable={true} // laat checkboxes zien
        createLabel="Nieuwe organisatie"
        onCreateClick={() => setCurrentTab("create-organisation")}
      />
    </div>
  );
}

export default Organisaties;
