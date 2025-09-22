import React, { useState } from "react";
import Topper from "../components/navigation/topper.jsx";
import Action from "../components/blocks/create-user/action.jsx";

/**
 * props:
 * - title: string titel bovenaan
 * - panels: [{text: "xxx"}] voor Topper
 * - currentTab, setCurrentTab: props van parent
 * - sidebarTabs: [{key: "Algemeen", label: "Algemeen"}, ...]
 * - renderContent: (activeTab) => ReactNode
 */
export default function CreatePageLayout({
  title,
  panels,
  currentTab,
  setCurrentTab,
  sidebarTabs,
  renderContent,
}) {
  const [activeTab, setActiveTab] = useState(sidebarTabs[0].key);
  const [currentPanel, setCurrentPanel] = useState(panels[0].text);

  const notActiveBtnClass =
    "w-full text-sm text-left px-3 py-2 rounded-md hover:bg-gray-100 font-medium text-gray-600 border-b border-gray-200";
  const activeBtnClass =
    "w-full text-sm text-left px-3 py-2 rounded-md bg-violet-100 text-violet-700 font-medium border-b border-gray-200 ";

  return (
    <div>
      <Topper
        setCurrentPanel={setCurrentPanel}
        currentPanel={currentPanel}
        panels={panels}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <div className="flex px-4 pt-4 justify-between ">
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight p-1">
          {title}
        </h1>
        <Action setCurrentTab={setCurrentTab} />
      </div>

      <div className="bg-gray-50 flex p-4 pt-6">
        {/* Sidebar */}
        <div>
          <div className="w-70 bg-white border border-gray-300 rounded-2xl p-3">
            <nav className="space-y-2">
              {sidebarTabs.map((tab) => (
                <button
                  key={tab.key}
                  className={
                    activeTab === tab.key ? activeBtnClass : notActiveBtnClass
                  }
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content rechts */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex-1">{renderContent(activeTab)}</div>
        </div>
      </div>
    </div>
  );
}
