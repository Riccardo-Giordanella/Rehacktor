import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import routes from "../../router/routes";
import { UserContext } from "../../context/UserContext";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Ryu from "../../assets/Ryu.png";

export default function Navbar() {
  const [slug, setSlug] = useState();
  const navigate = useNavigate();
  const { user, signOut, avatarUrl } = useContext(UserContext);

  const handleChange = (event) => setSlug(event.target.value);
  const handleLogout = async () => {
    await navigate("/");
    signOut();
  };

  return (
    <div className="navbar bg-neutral text-neutral-content shadow-md px-4 md:px-8">
      <div className="flex-1">
        <Link
          className="btn btn-ghost text-xl font-electro tracking-wide hover:text-primary transition-all duration-200"
          to={routes.home}
        >
          Rehacktor
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search games..."
          className="input input-bordered input-sm bg-base-200 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary w-28 md:w-48"
          onChange={handleChange}
        />
        <Link
          className="btn btn-sm btn-primary hover:scale-105 transition-transform"
          to={`/search/${slug}`}
        >
          <FaSearch />
        </Link>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-base-200 transition"
          >
            <div className="w-10 rounded-full overflow-hidden">
              {user ? (
                <img
                  alt="User avatar"
                  src={avatarUrl ?? Ryu}
                  className="hover:scale-105 transition-transform object-cover w-full h-full"
                />
              ) : (
                <FaArrowRightToBracket className="text-2xl text-primary hover:scale-110 transition-transform" />
              )}
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-200 rounded-box w-52 text-sm"
          >
            {!user ? (
              <>
                <li>
                  <Link className="hover:text-primary" to={routes.register}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" to={routes.login}>
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="hover:text-primary" to={routes.profile}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-400"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
