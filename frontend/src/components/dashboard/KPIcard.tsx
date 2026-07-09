type KpiCardProps = {
  title: string;
  value: number;
  color: string;
  trend: string;
  trendUp: boolean;
  subtitle: string;
};

export default function KpiCard({
  title,
  value,
  color,
  trend,
  trendUp,
  subtitle,
}: KpiCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm hover:border-blue-500 transition">
      <div className="mt-4 flex items-center justify-between">
        <span className={`text-sm font-medium ${
          trendUp ? "text-green-400" : "text-red-400"
        }`}>
          {trendUp ? "▲" : "▼"} {trend}
        </span>

        <span className="text-xs text-slate-400">
          {subtitle}
        </span>
      </div>

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}