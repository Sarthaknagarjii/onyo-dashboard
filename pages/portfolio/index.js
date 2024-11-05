import { useState } from "react";
import Head from "next/head";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioTabs from "@/components/portfolio/PortfolioTabs";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("projects");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Portfolio | Onyo</title>
        <meta name="description" content="Portfolio Dashboard" />
      </Head>
      <DashboardLayout>
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-black">Portfolio</h1>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2">
                <FunnelIcon className="h-5 w-5 text-gray-900" />
                <span className="text-gray-900 font-medium">Filter</span>
              </button>

              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search a project"
                  className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#df5532]" />
              </div>
            </div>
          </div>

          <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <PortfolioGrid searchQuery={searchQuery} activeTab={activeTab} />
        </div>
      </DashboardLayout>
    </>
  );
}
