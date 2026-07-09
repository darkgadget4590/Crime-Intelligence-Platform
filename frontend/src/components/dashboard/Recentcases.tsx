import cases from "../../data/recentCases";

export default function RecentCases() {
  return (
    <div className="space-y-3">
      {cases.map((c) => (
        <div
          key={c.id}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3"
        >
          <p className="font-semibold">{c.id}</p>
          <p className="text-sm text-slate-400">
            {c.type} • {c.city}
          </p>
        </div>
      ))}
    </div>
  );
}