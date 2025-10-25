import { RouterProvider } from "react-router";
import router from "./router/router.js";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
