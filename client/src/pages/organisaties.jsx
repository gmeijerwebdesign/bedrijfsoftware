import React, { useState, useEffect } from "react";

function Organisaties() {
  const [users, setUsers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Organisaties</h1>
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-600">Titel</th>
              <th className="px-4 py-2 font-medium text-gray-600">
                Medewerkers
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {organisations.map((org) => {
              const count = users.filter(
                (u) => u.organisation_id === org.organisation_id
              ).length;

              return (
                <tr key={org.organisation_id} className="odd:bg-gray-50">
                  <td className="px-4 py-2">{org.title}</td>
                  <td className="px-4 py-2">{count}</td>
                  <td className="px-4 py-2 text-right">
                    <button className="text-blue-600 hover:underline mr-2">
                      Bewerken
                    </button>
                    <button className="text-red-600 hover:underline">
                      Verwijderen
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Organisaties;
