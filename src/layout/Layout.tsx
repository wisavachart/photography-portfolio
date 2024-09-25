import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
