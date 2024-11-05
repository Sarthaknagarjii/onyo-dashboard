import styles from "./Sidebar.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HomeIcon,
  FolderIcon,
  DocumentTextIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Portfolio", path: "/portfolio", icon: FolderIcon },
  { name: "Inputs", path: "/inputs", icon: DocumentTextIcon },
  { name: "Profile", path: "/profile", icon: UserIcon },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const router = useRouter();

  return (
    <div
      style={{ backgroundColor: "#df5532 !important" }}
      className={`
        fixed left-0 top-0 h-full
        transition-all duration-300 z-20
        ${isOpen ? "w-64" : "w-20"}
        md:relative
      `}
    >
      <div className="p-4 flex items-center justify-between">
        {isOpen && <span className="font-bold text-xl text-white">Onyo</span>}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-white/10"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      <nav className="mt-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = router.pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                flex items-center px-4 py-3
                ${isOpen ? "gap-3" : "justify-center"}
                ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10"
                }
                transition-colors
              `}
            >
              <Icon className="h-6 w-6" />
              {isOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
