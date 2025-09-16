import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

import { MdKeyboardArrowDown } from "react-icons/md";

function Projecten({}) {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="p-6">
      <div className="absolute z-10 left-1/2  -translate-x-1/2"></div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Projecten</h1>
      </div>

      {/* filters */}
      <div className="flex justify-between py-4 items-center ">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1 max-w-sm">
            <FaSearch className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Zoek naam of e-mail"
              className="w-[250px] border rounded-md pl-8 pr-2 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-sm">
            Actief
          </button>
          <button className="text-gray-600 text-sm hover:underline">
            Wis filters
          </button>
        </div>

        {/* acties */}
        <div className="flex gap-2">
          <button className="border rounded-md px-3 py-1 text-sm hover:bg-gray-50 flex items-center">
            Exporteren
            <MdKeyboardArrowDown className="relative top-1/8 text-xl text-gray-700" />
          </button>
          <button className="border rounded-md px-3 py-1 text-sm hover:bg-gray-50 flex items-center">
            Acties
            <MdKeyboardArrowDown className="relative top-1/8 text-xl text-gray-700" />
          </button>
          <button
            // onClick={() => setCurrentTab("create-user")}
            className="bg-indigo-600 text-white rounded-md px-4 py-1 text-sm hover:bg-indigo-700"
          >
            <FaPlus className="inline w-4 h-4 mr-1" />
            Nieuwe medewerker
          </button>
        </div>
      </div>

      {/* tabel */}
      <div className="bg-white shadow-sm rounded overflow-hidden">
        <table className="w-full border-b text-sm border-collapse border border-gray-200">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                <input type="checkbox" />
              </th>

              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Project
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Kleur
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Klant
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Type
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Creator
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                acties
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {projects.map((emp) => (
              <tr key={emp.project_id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">
                  <input type="checkbox" />
                </td>

                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-medium cursor-pointer">
                  {emp.project_title}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <span className=" px-2  bg-red-500"></span>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {emp.project_customer}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {emp.project_type}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {emp.project_creator_id}
                </td>
                <td className="border border-gray-200 px-4 py-2 ">
                  <button className="text-indigo-600 hover:underline mr-2">
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

        {/* Pagination footer */}
        <div className="flex items-center justify-between pt-[100px] px-4 py-2 text-sm text-gray-600">
          <div></div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded hover:bg-gray-100">left</button>
            <span>Pagina 1 van 1</span>
            <button className="p-1 rounded hover:bg-gray-100">right</button>
          </div>
        </div>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}

export default Projecten;
