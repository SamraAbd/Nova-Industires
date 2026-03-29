import { Outlet } from "react-router";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
