import KpiCard from "../../components/dashboard/KPIcard";
import { dashboardStats } from "../../data/dashboard";
import Crimetrend from "../../components/dashboard/Crimetrend";
import AiSummary from "../../components/dashboard/AiSummary";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardCard from "../../components/dashboard/Dashboardcard";
import RecentCases from "../../components/dashboard/Recentcases";
import RecentAlerts from "../../components/dashboard/RecentAlerts";
import ActivityTimeline from "../../components/dashboard/Timeline";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      <div>
        <DashboardHeader />

      </div>

      <div className="grid grid-cols-4 gap-4">

        {dashboardStats.map((stat) => (
          <KpiCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
            trend={stat.trend}
            trendUp={stat.trendUp}
            subtitle={stat.subtitle}
          />
        ))}

      </div>

     <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8">
    <Crimetrend />
  </div>
<div className="col-span-4">
  <AiSummary />
</div>
</div>

<div className="grid grid-cols-2 gap-6">
  <DashboardCard title="Recent Cases">
    <RecentCases />
  </DashboardCard>

  <DashboardCard title="Recent Alerts">
    <RecentAlerts />
  </DashboardCard>
</div>
<DashboardCard title="Live Activity Timeline">
  <ActivityTimeline />
</DashboardCard>

    </div>
  );
}