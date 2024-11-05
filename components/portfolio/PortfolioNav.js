import { useState } from "react";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "saved", label: "Saved" },
  { id: "shared", label: "Shared" },
  { id: "achievement", label: "Achievement" },
];

export default function PortfolioNav({ activeTab, onTabChange }) {
  return (
    <nav className="flex space-x-8 border-b border-gray-200">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`
            pb-4 px-1 border-b-2 font-medium text-sm
            ${
              activeTab === item.id
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
