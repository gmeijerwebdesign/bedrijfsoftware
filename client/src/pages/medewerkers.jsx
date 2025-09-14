import { useEffect } from "react";
import { useState } from "react";

function Medewerkers({ currentUser }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [organisations, setOrganisations] = useState([]);
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

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Medewerkers</h1>
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-600">Naam</th>
              <th className="px-4 py-2 font-medium text-gray-600">Email</th>
              <th className="px-4 py-2 font-medium text-gray-600">Rol</th>
              <th className="px-4 py-2 font-medium text-gray-600">
                Organisatie
              </th>

              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((emp) => (
              <tr key={emp.id} className="odd:bg-gray-50">
                <td className="px-4 py-2">
                  {emp.username.split("@gmail.com")}
                </td>
                <td className="px-4 py-2">{emp.username}</td>
                <td className="px-4 py-2">{emp.role}</td>
                <td className="px-4 py-2">
                  {organisations.find(
                    (org) => org.organisation_id === emp.organisation_id
                  )?.title || "—"}
                </td>

                <td className="px-4 py-2 text-right">
                  <button className="text-blue-600 hover:underline mr-2">
                    Bewerken
                  </button>
                  <button className="text-red-600 hover:underline">
                    Verwijderen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Medewerkers;
