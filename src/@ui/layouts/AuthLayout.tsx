import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-screen flex flex-col justify-start h-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
