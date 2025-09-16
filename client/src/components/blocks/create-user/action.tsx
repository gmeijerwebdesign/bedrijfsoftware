import React from "react";

function Action() {
  return (
    <div className="flex justify-end relative bottom-0 mt-8 space-x-3">
      <button className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-50">
        Annuleren
      </button>
      <button className="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700">
        Opslaan
      </button>
    </div>
  );
}

export default Action;
