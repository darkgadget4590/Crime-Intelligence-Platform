export default function AiSummary() {
  const insights = [
    "Vehicle theft increased by 12% this week.",
    "A new crime hotspot has emerged in Bengaluru East.",
    "Three repeat offenders are linked to recent burglary cases.",
    "Cyber fraud complaints rose significantly over the weekend.",
  ];

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">
        🧠 AI Intelligence Summary
      </h2>

      <div className="space-y-4">
        {insights.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-slate-800 p-4 border border-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}