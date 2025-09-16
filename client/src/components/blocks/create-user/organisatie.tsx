import React from "react";

function OrganisatieForm() {
  return (
    <div>
      {/* Main content */}
      <main className="flex-1 p-8 relative -top-4 ">
        <div className="bg-white border border-gray-300 rounded-2xl  p-6 min-w-4xl">
          <h2 className="text-xl font-semibold mb-6">Organisatie</h2>

          {/* Emailadres en Wachtwoord */}
          <div className="space-y-6">
            <div className="flex gap-11">
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-600">
                  Organisatie <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2 mt-1">
                  <input
                    type="text"
                    defaultValue={"administrator"}
                    className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-600">
                  Role <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2 mt-1">
                  <input
                    type="text"
                    defaultValue={"medewerker"}
                    className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-11">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Functienaam
                </label>
                <input
                  type="text"
                  defaultValue={"employee"}
                  className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Afdeling
                </label>
                <input
                  type="text"
                  placeholder="Sales team..."
                  className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrganisatieForm;
