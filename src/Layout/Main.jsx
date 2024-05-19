import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFoot =
    location.pathname.includes("login") || location.pathname.includes("singup");
  return (
    <div>
      {noHeaderFoot || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFoot || <Footer></Footer>}
    </div>
  );
};

export default Main;
