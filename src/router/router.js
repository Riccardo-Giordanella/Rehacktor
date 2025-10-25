import { createBrowserRouter } from "react-router";
import routes from "./routes.js";
import Layout from "../components/Layout.jsx";
import Homepage from "../views/Homepage.jsx";
import {
  getAllGamesLoader,
  getAllGenres,
  getFilteredByGenreGames,
  getSearchedGames,
} from "./loaders.jsx";
import SearchPage from "../views/SearchPage.jsx";
import GenrePage from "../views/GenrePage.jsx";

const router = createBrowserRouter([
  {
    path: routes.home,
    Component: Layout,
    loader: getAllGenres,
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
      {
        path: routes.genre,
        Component: GenrePage,
        loader: getFilteredByGenreGames,
      },
    ],
  },
]);

export default router;
