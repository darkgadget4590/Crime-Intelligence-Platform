type KpiCardProps = {
  title: string;
  value: number;
  color: string;
};

export default function KpiCard({
  title,
  value,
  color,
}: KpiCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm hover:border-blue-500 transition">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}