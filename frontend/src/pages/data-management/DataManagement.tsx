import UploadCard from "../../components/data-management/UploadCard";
import DatabaseStatus from "../../components/data-management/DatabaseStatus";
import UploadedDatasetsTable from "../../components/data-management/UploadedDatasetsTable";

export default function DataManagement() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Data Management
        </h1>

        <p className="text-slate-400">
          Manage crime datasets and database imports.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2">
          <UploadCard />
        </div>

        <DatabaseStatus />

      </div>

      <UploadedDatasetsTable />

    </div>
  );
}