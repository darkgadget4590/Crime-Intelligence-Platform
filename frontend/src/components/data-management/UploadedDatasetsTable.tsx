import DashboardCard from "../dashboard/Dashboardcard";
import { datasets } from "../../data/datasets";

export default function UploadedDatasetsTable() {
  return (
    <DashboardCard title="Uploaded Datasets">
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="border-b border-slate-700 text-slate-400">
            <tr>
              <th className="pb-3">Filename</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Rows</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {datasets.map((dataset) => (
              <tr
                key={dataset.file}
                className="border-b border-slate-800 hover:bg-slate-800"
              >
                <td className="py-4">{dataset.file}</td>
                <td>{dataset.type}</td>
                <td>{dataset.rows.toLocaleString()}</td>

                <td>
                  <span className="rounded-full bg-green-900/40 px-3 py-1 text-sm text-green-400">
                    {dataset.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </DashboardCard>
  );
}