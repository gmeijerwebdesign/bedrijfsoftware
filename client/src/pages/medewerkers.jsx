import { useEffect, useState } from "react";

import Topper from "../components/navigation/topper";

import DataTable from "../components/blocks/forms/form";

function Medewerkers({ currentUser, setCurrentTab }) {
  const [users, setUsers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [error, setError] = useState(null);
  const panel_indentifiers = [{ text: "Medewerkers" }, { text: "Teams" }];
  const [currentPanel, setCurrentPanel] = useState("Medewerkers");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, orgsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_CONNECTION_LOCAL}/users`),
          fetch(`${import.meta.env.VITE_API_CONNECTION_LOCAL}/organisations`),
        ]);
        if (!usersRes.ok || !orgsRes.ok)
          throw new Error("HTTP error fetching data");

        setUsers(await usersRes.json());
        setOrganisations(await orgsRes.json());
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);
  // haal alleen users van eigen organisatie op
  const list = currentUser
    ? users.filter((u) => u.organisation_id === currentUser.organisation_id)
    : [];

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  const columns = [
    {
      header: "Naam",
      render: (emp) => (
        <span className="text-blue-700 font-medium cursor-pointer">
          {emp.username.replace("@gmail.com", "")}
        </span>
      ),
    },
    { header: "Email", accessor: "username" },
    { header: "Rol", accessor: "role" },
    {
      header: "Organisatie",
      render: (emp) =>
        organisations.find((org) => org.organisation_id === emp.organisation_id)
          ?.title || "—",
    },
    {
      header: "Acties",
      render: () => (
        <>
          <button className="text-indigo-600 hover:underline mr-2">
            Bewerken
          </button>
          <button className="text-red-600 hover:underline">Verwijderen</button>
        </>
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
      <div className="p-6">
        {/* {currentPanel === "Medewerkers" ? (
          <MedewerkerForm
            setCurrentTab={setCurrentTab}
            list={list}
            organisations={organisations}
            error={error}
          />
        ) : (
          <TeamsForm
            setCurrentTab={setCurrentTab}
            list={list}
            organisations={organisations}
            error={error}
          />
        )} */}
        <DataTable
          title="Medewerkers"
          data={list || []}
          columns={columns}
          rowKey="organisation_id" // belangrijk
          selectable={true} // laat checkboxes zien
          createLabel="Nieuwe organisatie"
          onCreateClick={() => setCurrentTab("create-user")}
        />
      </div>
    </div>
  );
}

export default Medewerkers;
