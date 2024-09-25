import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import FooterMenu from "../components/footerMenu/FooterMenu";

const Layout = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-between">
        <Navbar />
        <Outlet />
        <FooterMenu />
      </div>
    </>
  );
};

export default Layout;
