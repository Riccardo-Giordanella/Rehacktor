import { createBrowserRouter } from "react-router";

import routes from "./routes.js";
import Homepage from "../views/Homepage.jsx";
import Layout from "../layouts/Layout.jsx";
import {
  getAllGamesLoader,
  getAllGenres,
  getFilteredByGenreGames,
  getGameDetails,
  getSearchedGames,
} from "./loaders.jsx";
import SearchPage from "../views/SearchPage.jsx";
import GenrePage from "../views/GenrePage.jsx";
import AuthenticationLayout from "../layouts/AuthenticationLayout.jsx";
import RegisterPage from "../views/auth/RegisterPage.jsx";
import LoginPage from "../views/auth/LoginPage.jsx";
import ProfilePage from "../views/auth/ProfilePage.jsx";
import ProfileSettingsPage from "../views/auth/ProfileSettingsPage.jsx";
import DetailPage from "../views/DetailPage.jsx";

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
  {
    path: "/auth",
    Component: AuthenticationLayout,
    children: [
      {
        path: routes.register,
        Component: RegisterPage,
      },
      {
        path: routes.login,
        Component: LoginPage,
      },
      {
        path: routes.profile,
        Component: ProfilePage,
      },
      {
        path: routes.profile_settings,
        Component: ProfileSettingsPage,
      },
    ],
  },
  {
    path: routes.detail,
    Component: DetailPage,
    loader: getGameDetails,
  },
]);

export default router;
