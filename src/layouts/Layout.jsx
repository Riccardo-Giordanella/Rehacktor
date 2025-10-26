import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/LayoutComponents/Navbar.jsx";
import Footer from "../components/LayoutComponents/Footer.jsx";
import Sidebar from "../components/LayoutComponents/Sidebar.jsx";

export default function Layout() {
  const genres = useLoaderData();

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-7 gap-4">
        <div>
          <Sidebar genres={genres} />
        </div>
        <div className="col-span-6">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}
