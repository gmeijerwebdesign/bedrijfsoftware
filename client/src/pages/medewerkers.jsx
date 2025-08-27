function Medewerkers() {
  const employees = [
    { id: 1, name: "Jan Jansen", role: "Developer", email: "jan@bedrijf.nl" },
    { id: 2, name: "Lisa Peters", role: "Manager", email: "lisa@bedrijf.nl" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Medewerkers</h1>
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-600">Naam</th>
              <th className="px-4 py-2 font-medium text-gray-600">Rol</th>
              <th className="px-4 py-2 font-medium text-gray-600">Email</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="odd:bg-gray-50">
                <td className="px-4 py-2">{emp.name}</td>
                <td className="px-4 py-2">{emp.role}</td>
                <td className="px-4 py-2">{emp.email}</td>
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
