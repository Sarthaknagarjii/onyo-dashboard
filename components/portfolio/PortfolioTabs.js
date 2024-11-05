import { useState } from "react";

export default function PortfolioTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "saved", label: "Saved" },
    { id: "shared", label: "Shared" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Mobile tabs */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 py-3 px-4 text-sm font-medium border-b-2
                ${
                  activeTab === tab.id
                    ? "border-[#df5532] text-[#df5532]"
                    : "border-transparent text-gray-500"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop tabs (original) */}
      <div className="hidden md:block">
        <div className="flex justify-start px-4 sm:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-3 border-b-2 text-sm font-medium
                ${
                  activeTab === tab.id
                    ? "border-[#df5532] text-[#df5532]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
