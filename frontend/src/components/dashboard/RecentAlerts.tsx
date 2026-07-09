
import alerts from "../../data/alerts";

export default function RecentAlerts() {
  return (
    <div className="space-y-3">
      {alerts.map((alert: string, idx: number) => (
        <div
          key={idx}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3"
        >
          🚨 {alert}
        </div>
      ))}
    </div>
  );
}