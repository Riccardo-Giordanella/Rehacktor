import { Outlet } from "react-router";

import Navbar from "../components/LayoutComponents/Navbar";
import Footer from "../components/LayoutComponents/Footer";

export default function AuthenticationLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
