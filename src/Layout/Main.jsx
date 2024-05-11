import { Outlet } from "react-router-dom";
import Navbar from "../components/ShareSection/Navbar";
import Footer from "../components/ShareSection/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Toaster />
      <div>
        <div className="container mx-auto">
          <Navbar></Navbar>
        </div>

        <div className="min-h-[calc(100vh-116px-239px)]   ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
