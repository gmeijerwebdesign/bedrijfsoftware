import { FaPlus, FaRegClock } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import { AiFillProject } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

function Header({ signOut, currentTab, setCurrentTab }) {
  const navigationButtons = [
    { icon: <FaRegClock />, text: "Registreren" },
    { icon: <IoPeople />, text: "Medewerkers" },
    { icon: <CgOrganisation />, text: "Organisaties" },
    // { icon: <MdDescription />, text: "Facturen" },
    { icon: <AiFillProject />, text: "Projecten" },
  ];

  const getButtonClasses = (tabName) => {
    const base = "flex items-center gap-1 text-sm  h-[70px] px-5 transition";
    const active = "bg-purple-100 border-b-1 border-purple-500 text-purple-700";
    const inactive =
      "text-gray-700 hover:bg-gray-100 hover:border-b border-gray-400";
    return `${base} ${currentTab === tabName ? active : inactive}`;
  };

  return (
    <div className="relative top-0 w-full h-[70px] border-b border-gray-300 flex items-center  px-6 gap-11 bg-white">
      <div className="flex items-center gap-4">
        <PiSquaresFour />
        <FaRegClock className="text-5xl p-2 bg-slate-800 text-blue-500 rounded-md" />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex ">
          {navigationButtons.map((btn) => (
            <button
              key={btn.text}
              className={getButtonClasses(btn.text)}
              onClick={() => setCurrentTab(btn.text)} // indien je tab wil wijzigen
            >
              {btn.icon}
              <span>{btn.text}</span>
            </button>
          ))}
        </div>
        {/* Rechterkant: uitnodigen + instellingen */}
        <div className="flex items-center gap-3">
          <span className=" text-slate-500 text-[15px]  h-full flex items-center p-3  hover:bg-gray-100 hover:border-b">
            <FaPlus />
          </span>
          <span className=" text-slate-500 text-[16px]  h-full flex items-center p-3  hover:bg-gray-100 hover:border-b">
            <IoMdSettings />
          </span>
          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            JV
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
