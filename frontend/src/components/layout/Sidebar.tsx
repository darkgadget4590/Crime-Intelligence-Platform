import {
  LayoutDashboard,
  Bot,
  FolderOpen,
  Network,
  ChartColumn,
  FileText,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const items = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "AI Copilot", icon: Bot, path: "/Copilot" },
  { name: "Case Explorer", icon: FolderOpen, path: "/Cases" },
  { name: "Network Analysis", icon: Network, path: "/Network" },
  { name: "Crime Analytics", icon: ChartColumn, path: "/Analytics" },
  { name: "Reports", icon: FileText, path: "/Reports" },
  { name: "Settings", icon: Settings, path: "/Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 h-screen">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-500">
          🚔 KARPOL
        </h1>
        <p className="text-slate-400 text-sm">
          Crime Intelligence Platform
        </p>
      </div>

      <nav className="mt-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}