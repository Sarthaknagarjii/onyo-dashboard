import Head from "next/head";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { HomeIcon, ChartBarIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Onyo</title>
        <meta name="description" content="Onyo Dashboard" />
      </Head>
      <DashboardLayout>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Example of using an icon */}
          <div className="p-6 bg-white rounded-lg shadow">
            <HomeIcon className="w-6 h-6 text-gray-500" />
            <h2>Dashboard Item</h2>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
