import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HomeIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  UserIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Portfolio", href: "/portfolio", icon: BriefcaseIcon },
  { name: "Inputs", href: "/inputs", icon: DocumentTextIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

export default function DashboardLayout({ children }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-6">
            <span className="text-xl font-bold text-orange-600">Onyo</span>
          </div>

          <nav className="flex-1 px-4 space-y-1 mt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-4 py-3 text-sm font-medium rounded-lg
                  ${
                    router.pathname === item.href
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-64">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex justify-end items-center px-6 h-16">
            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <BellIcon className="w-6 h-6" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">John Doe</span>
                  <span className="text-gray-500 text-sm">Manager</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
