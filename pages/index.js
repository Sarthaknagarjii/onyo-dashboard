import DashboardLayout from "@/components/layout/DashboardLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Onyo</title>
        <meta name="description" content="Onyo Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <div className="grid gap-6">{/* Dashboard content will go here */}</div>
      </DashboardLayout>
    </>
  );
}
