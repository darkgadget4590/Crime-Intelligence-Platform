import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/Mainlayout";
import Dashboard from "../pages/dashboard/Dashboard";
import DataManagement from "../pages/data-management/DataManagement";
import Copilot from "../pages/copilot/Copilot";
import Cases from "../pages/cases/Cases";
import Analytics from "../pages/analytics/Analytics";
import Network from "../pages/network/Network";
import Timeline from "../pages/timeline/Timeline";
import Reports from "../pages/reports/Reports";
import Settings from "../pages/settings/Settings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/DataManagement" element={<DataManagement />} />
          <Route path="/Copilot" element={<Copilot />} />
          <Route path="/Cases" element={<Cases />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Network" element={<Network />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}