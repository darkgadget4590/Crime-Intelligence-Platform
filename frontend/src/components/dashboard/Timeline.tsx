import activities from "../../data/activities";

export default function ActivityTimeline() {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex items-start gap-4"
        >
          <div className="mt-2 h-3 w-3 rounded-full bg-blue-500" />

          <div>
            <p className="text-sm font-medium">
              {activity.text}
            </p>

            <p className="text-xs text-slate-400">
              {activity.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}