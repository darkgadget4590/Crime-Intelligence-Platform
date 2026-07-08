import {
  Bell,
  Search,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4">


        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search FIR, Accused, Victim..."
            className="w-[450px] bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="flex items-center gap-1 text-slate-300 hover:text-white">
          EN
          <ChevronDown size={16} />
        </button>

        <button className="text-slate-300 hover:text-white">
          <Bell size={20} />
        </button>

        <button className="text-slate-300 hover:text-white">
          <Settings size={20} />
        </button>

        <button className="flex items-center gap-2">

          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            D
          </div>

          <div className="text-left">

            <p className="text-sm font-medium">
              Dhanush
            </p>

            <p className="text-xs text-slate-400">
              Super Admin
            </p>

          </div>

          <ChevronDown size={16} />

        </button>

      </div>

    </header>
  );
}