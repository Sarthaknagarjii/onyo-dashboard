import { useState } from "react";

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "saved", label: "Saved" },
    { id: "shared", label: "Shared" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === tab.id
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
