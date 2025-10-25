import { createBrowserRouter } from "react-router";
import routes from "./routes.js";
import Layout from "../components/Layout.jsx";
import Homepage from "../views/Homepage.jsx";
import { getAllGamesLoader, getSearchedGames } from "./loaders.jsx";
import SearchPage from "../views/SearchPage.jsx";

const router = createBrowserRouter([
  {
    path: routes.home,
    Component: Layout,
    children: [
      {
        path: routes.home,
        Component: Homepage,
        loader: getAllGamesLoader,
      },
      {
        path: routes.search,
        Component: SearchPage,
        loader: getSearchedGames,
      },
    ],
  },
]);

export default router;
