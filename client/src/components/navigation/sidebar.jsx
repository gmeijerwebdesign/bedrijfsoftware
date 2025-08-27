import { useState } from "react";
import { FaHome, FaTachometerAlt, FaTable, FaTh, FaUser } from "react-icons/fa";

function Sidebar({ setCurrentTab }) {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", icon: <FaHome size={20} />, label: "Home" },
    { id: "medewerkers", icon: <FaTachometerAlt size={20} />, label: "Gauge" },
    { id: "table", icon: <FaTable size={20} />, label: "Table" },
    { id: "grid", icon: <FaTh size={20} />, label: "Grid" },
    { id: "user", icon: <FaUser size={20} />, label: "User" },
  ];

  return (
    <div className="flex flex-col items-center bg-[#333] text-white h-screen w-16 py-4 justify-between">
      {/* Top logo */}
      <div className="bg-gray-700 rounded-md px-2 py-1 font-bold">Be</div>

      {/* Menu */}
      <div className="flex flex-col gap-4 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              setCurrentTab(item.id);
            }}
            className={`p-2 rounded-md transition-colors ${
              active === item.id
                ? "bg-blue-600 text-white"
                : "text-blue-400 hover:bg-gray-800"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Profile image */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/32"
          alt="profile"
          className="rounded-full border border-gray-600"
        />
      </div>
    </div>
  );
}

export default Sidebar;
