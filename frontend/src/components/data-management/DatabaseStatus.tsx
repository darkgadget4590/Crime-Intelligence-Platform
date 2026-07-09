import DashboardCard from "../dashboard/Dashboardcard";

export default function DatabaseStatus() {
  return (
    <DashboardCard title="Database Status">

      <div className="space-y-5">

        <Status label="Connection" value="Connected" color="text-green-400"/>

        <Status label="Tables" value="0"/>

        <Status label="Records" value="0"/>

        <Status label="Last Sync" value="Never"/>

      </div>

    </DashboardCard>
  );
}

function Status({
  label,
  value,
  color = "text-white",
}:{
  label:string;
  value:string;
  color?:string;
}){

  return(

    <div className="flex justify-between">

      <span className="text-slate-400">
        {label}
      </span>

      <span className={color}>
        {value}
      </span>

    </div>

  )

}