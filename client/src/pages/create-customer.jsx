import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Algemeen from "../components/blocks/create-user/algemeen";
import OrganisatieForm from "../components/blocks/create-user/organisatie";
import Action from "../components/blocks/create-user/action";

export default function CustomerForm({ setCurrentTab }) {
  const [activeTab, setActiveTab] = useState("Algemeen");

  const notActiveBtnClass =
    "w-full text-sm text-left px-3 py-2 rounded-md hover:bg-gray-100 font-medium text-gray-600 border-b border-gray-200";
  const activeBtnClass =
    "w-full text-sm text-left px-3 py-2 rounded-md bg-violet-100 text-violet-700 font-medium border-b border-gray-200";

  return (
    <div className=" bg-gray-50 flex">
      {/* Sidebar */}
      <div>
        <h1
          className="text-xl font-semibold mb-2 p-2 cursor-pointer"
          onClick={() => setCurrentTab("Medewerkers")}
        >
          <FaArrowLeft />
        </h1>

        <div className="w-70 bg-white border border-gray-300 rounded-2xl p-3">
          <nav className="space-y-2">
            <button
              className={
                activeTab === "Algemeen" ? activeBtnClass : notActiveBtnClass
              }
              onClick={() => setActiveTab("Algemeen")}
            >
              Algemeen
            </button>
            <button
              className={
                activeTab === "Organisatie" ? activeBtnClass : notActiveBtnClass
              }
              onClick={() => setActiveTab("Organisatie")}
            >
              Organisatie
            </button>
          </nav>
        </div>
      </div>

      {/* Rechtercontent + knoppen onderaan */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1">
          {activeTab === "Algemeen" && <Algemeen />}
          {activeTab === "Organisatie" && <OrganisatieForm />}
        </div>

        {/* Action helemaal onderaan */}
        <Action />
      </div>
    </div>
  );
}
