import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/LayoutComponents/Navbar.jsx";
import Footer from "../components/LayoutComponents/Footer.jsx";
import Sidebar from "../components/LayoutComponents/Sidebar.jsx";

export default function Layout() {
  const genres = useLoaderData();

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-7 gap-6 bg-base-100 text-neutral-content px-4 py-6 min-h-screen">
        <aside className="hidden md:block md:col-span-1">
          <Sidebar genres={genres} />
        </aside>
        <main className="col-span-1 md:col-span-6">
          <Outlet />
        </main>
      </section>
      <Footer />
    </>
  );
}
