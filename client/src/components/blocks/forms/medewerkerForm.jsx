import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
function MedewerkerForm({ setCurrentTab, list, organisations, error }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          Medewerkers
        </h1>
      </div>

      {/* filters */}
      <div className="flex justify-between py-2 items-center ">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1 max-w-sm">
            <FaSearch className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Zoek naam of e-mail"
              className="w-[350px] border border-gray-300 rounded-md pl-8 pr-2 py-2 text-sm outline-none"
            />
          </div>
          <button className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-md text-sm">
            Actief
          </button>
          <button className="text-gray-600 text-sm hover:underline">
            Wis filters
          </button>
        </div>

        {/* acties */}
        <div className="flex gap-2">
          <button className="border border-gray-300 text-gray-700 rounded-md px-4 py-1 text-sm hover:bg-gray-50 flex items-center">
            Acties
            <MdKeyboardArrowDown className="relative  text-xl text-gray-700" />
          </button>
          <button
            onClick={() => setCurrentTab("create-user")}
            className="bg-indigo-600 text-white rounded-md px-4 py-2 text-sm hover:bg-indigo-700"
          >
            <FaPlus className="inline w-3 h-3 mr-3 " />
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
                Naam
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Email
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Rol
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                Organisatie
              </th>
              <th className="border border-gray-200 px-4 py-2 font-medium text-gray-600">
                acties
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {list.map((emp) => (
              <tr key={emp.user_id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-medium cursor-pointer">
                  {emp.username.replace("@gmail.com", "")}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {emp.username}
                </td>
                <td className="border border-gray-200 px-4 py-2">{emp.role}</td>
                <td className="border border-gray-200 px-4 py-2">
                  {organisations.find(
                    (org) => org.organisation_id === emp.organisation_id
                  )?.title || "—"}
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
          <div>
            1 tot {list.length} van {list.length}
          </div>
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

export default MedewerkerForm;
