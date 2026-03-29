import { Routes, Route } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx";
import Home from "../Pages/Home.jsx";
import MissionPage from "../Pages/Mission.jsx";
import SystemsPage from "../Pages/System.jsx";
import NewsPage from "../Pages/News.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/systems" element={<SystemsPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Route>
    </Routes>
  );
}
