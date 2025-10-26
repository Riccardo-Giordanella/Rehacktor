import { RouterProvider } from "react-router";

import router from "./router/router.js";
import { UserContextProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  );
}

export default App;
