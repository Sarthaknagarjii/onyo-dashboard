import { useState } from "react";
import Head from "next/head";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioTabs from "@/components/portfolio/PortfolioTabs";
import SearchFilter from "@/components/portfolio/SearchFilter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import FilterButton from "@/components/portfolio/FilterButton";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <Head>
        <title>Portfolio | Onyo</title>
        <meta name="description" content="Portfolio Dashboard" />
      </Head>
      <DashboardLayout>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <div className="bg-white shadow-sm">
            <PortfolioHeader />
            <div className="hidden md:flex items-center">
              <PortfolioTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <SearchFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
          </div>
          <div className="md:hidden">
            <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
          <div className="flex-1 px-4 py-6 sm:px-6">
            <PortfolioGrid searchQuery={searchQuery} activeTab={activeTab} />
          </div>
          <FilterButton onClick={() => console.log("Open filter modal")} />
        </div>
      </DashboardLayout>
    </>
  );
}
