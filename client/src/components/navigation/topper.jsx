import { FaRegClock } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

function Topper({ currentPanel, setCurrentPanel, panels, setCurrentTab }) {
  const getButtonClasses = (tabName) => {
    const base =
      "flex items-center gap-1 text-[13px] h-10 transition cursor-pointer";
    const active =
      "border-b-2 border-purple-500 text-purple-700 cursor-pointer";
    const inactive = "text-gray-700";
    return `${base} ${currentPanel === tabName ? active : inactive}`;
  };

  return (
    <div className="relative top-0 w-full h-10 border-b border-gray-300 flex items-center px-6 gap-11 bg-white">
      <div className="flex gap-6">
        {panels.map((btn) => (
          <button
            key={btn.text}
            className={getButtonClasses(btn.text)}
            onClick={() => {
              setCurrentPanel(btn.text);
              // voor terug gaan uit create-user
              if (btn.text === "Medewerkers") {
                setCurrentTab("Medewerkers");
              }
            }}
          >
            <span>{btn.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Topper;
