import React, { useEffect, useState } from "react";
import Topper from "../components/navigation/topper";
import DataTable from "../components/blocks/forms/form";

function Projecten({ currentUser, setCurrentTab }) {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const panel_indentifiers = [{ text: "Projecten" }];
  const [currentPanel, setCurrentPanel] = useState("Projecten");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, projectRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_CONNECTION_LOCAL}/users`),
          fetch(`${import.meta.env.VITE_API_CONNECTION_LOCAL}/projects`),
        ]);
        if (!usersRes.ok || !projectRes.ok)
          throw new Error("HTTP error fetching data");

        setUsers(await usersRes.json());
        setProjects(await projectRes.json());
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  // Kolommen voor DataTable
  const columns = [
    {
      header: "Project",
      render: (p) => (
        <span className="text-blue-700 font-medium cursor-pointer">
          {p.project_title}
        </span>
      ),
    },
    {
      header: "Kleur",
      render: () => (
        <span className="inline-block w-4 h-4 rounded-full bg-red-500" />
      ),
    },
    {
      header: "Klant",
      accessor: "project_customer",
    },
    {
      header: "Type",
      accessor: "project_type",
    },
    {
      header: "Creator",
      accessor: "project_creator_id",
    },
    {
      header: "Acties",
      render: (p) => (
        <div>
          <button className="text-indigo-600 hover:underline mr-2">
            Bewerken
          </button>
          <button className="text-red-600 hover:underline">Verwijderen</button>
        </div>
      ),
    },
  ];

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div>
      <Topper
        setCurrentPanel={setCurrentPanel}
        currentPanel={currentPanel}
        panels={panel_indentifiers}
      />

      <DataTable
        title="Projecten"
        data={projects || []}
        columns={columns}
        rowKey="project_id" // belangrijk voor unieke sleutel + checkboxes
        selectable={true} // checkboxes tonen
        createLabel="Nieuw project"
        onCreateClick={() => setCurrentTab("create-project")}
      />
    </div>
  );
}

export default Projecten;
