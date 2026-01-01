import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="content">
        {/* <Outlet /> är platshållare där React Router renderar
                den sida man är på. ex Home*/}
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
