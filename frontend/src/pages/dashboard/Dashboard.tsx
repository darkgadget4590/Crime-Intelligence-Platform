import KpiCard from "../../components/dashboard/KPIcard";
import { dashboardStats } from "../../data/dashboard";
import Crimetrend from "../../components/dashboard/Crimetrend";
import AiSummary from "../../components/dashboard/AiSummary";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Karnataka Police Crime Intelligence Platform
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">

        {dashboardStats.map((stat) => (
          <KpiCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}

      </div>

     <div className="grid grid-cols-3 gap-6">
  <div className="col-span-2">
    <Crimetrend />
  </div>

  <AiSummary />
</div>

    </div>
  );
}