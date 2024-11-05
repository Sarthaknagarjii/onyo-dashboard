import Head from "next/head";
import DashboardLayout from "@/components/layout/DashboardLayout";
import InputsHeader from "@/components/inputs/InputsHeader";
import InputsTable from "@/components/inputs/InputsTable";

export default function Inputs() {
  return (
    <>
      <Head>
        <title>Inputs | Onyo</title>
        <meta name="description" content="Data Input Interface" />
      </Head>
      <DashboardLayout>
        <div className="p-6">
          <InputsHeader />
          <InputsTable />
        </div>
      </DashboardLayout>
    </>
  );
}
