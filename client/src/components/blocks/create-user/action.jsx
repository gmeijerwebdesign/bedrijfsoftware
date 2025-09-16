import React from "react";

function Action({ setCurrentTab }) {
  return (
    <div className="flex relative right-13  space-x-3">
      <button
        className="px-4 py-1 rounded-md border text-gray-600 hover:bg-gray-50 "
        onClick={() => setCurrentTab("Medewerkers")}
      >
        Annuleren
      </button>
      <button className="px-4 py-1 rounded-md bg-violet-600 text-white hover:bg-violet-700">
        Opslaan
      </button>
    </div>
  );
}

export default Action;
