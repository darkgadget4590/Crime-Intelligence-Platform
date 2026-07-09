export default function DashboardHeader() {
  const now = new Date();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Good Evening, Administrator</h1>
        <p className="text-slate-400">
          Karnataka Police Crime Intelligence Platform
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-slate-400">Last Updated</p>
        <p>{now.toLocaleString()}</p>

        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-900/40 px-3 py-1 text-sm text-green-400">
          🟢 System Operational
        </div>
      </div>
    </div>
  );
}