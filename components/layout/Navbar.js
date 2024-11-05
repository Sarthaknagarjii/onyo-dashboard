import { useState } from "react";
import Link from "next/link";
import SearchBar from "../common/SearchBar";

const navTabs = [
  { name: "Project", path: "/dashboard/project" },
  { name: "Saved", path: "/dashboard/saved" },
  { name: "Shared", path: "/dashboard/shared" },
  { name: "Achievement", path: "/dashboard/achievement" },
];

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 h-16">
        <nav className="hidden md:flex items-center gap-8">
          {navTabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              {tab.name}
            </Link>
          ))}
        </nav>

        <div className="flex-1 max-w-xl px-4">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-900">
            <BellIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-900">John Doe, Manager</span>
          </div>
        </div>
      </div>
    </header>
  );
}
