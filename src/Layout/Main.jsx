import { Outlet } from "react-router-dom";
import Navbar from "../components/ShareSection/Navbar";
import Footer from "../components/ShareSection/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[calc(100vh-116px-239px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
