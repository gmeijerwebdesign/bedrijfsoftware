import React from "react";

function Algemeen() {
  return (
    <div>
      {/* Main content */}
      <main className="flex-1 p-8 relative -top-4 ">
        <div className="bg-white border border-gray-300 rounded-2xl  p-6 min-w-4xl">
          <h2 className="text-xl font-semibold mb-6">Algemeen</h2>

          {/* Emailadres en Wachtwoord */}
          <div className="space-y-6">
            <div className="flex gap-11">
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-600">
                  Emailadres <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2 mt-1">
                  <input
                    type="text"
                    placeholder="email..."
                    className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-600">
                  Wachtwoord <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2 mt-1">
                  <input
                    type="password"
                    placeholder="wachtwoord.."
                    className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-11">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Gebruikersnaam
                </label>
                <input
                  type="text"
                  placeholder="Telefoonnummer"
                  className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Mobiele nummer
                </label>
                <input
                  type="number"
                  placeholder="Telefoonnummer.."
                  className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                />
              </div>
            </div>

            <div className="flex gap-11">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Postcode
                </label>
                <input
                  type="text"
                  placeholder="Postcode"
                  className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Stad/Dorp
                </label>
                <input
                  type="text"
                  placeholder="Stad/Dorp"
                  className="flex-1 p-1 border min-w-64  border-gray-300  outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Adres
              </label>
              <input
                type="email"
                placeholder="Adres....."
                className="flex-1 p-1 border min-w-139  border-gray-300  outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Land
              </label>
              <input
                type="text"
                placeholder="Land....."
                className="flex-1 p-1 border min-w-139  border-gray-300  outline-none"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Algemeen;
