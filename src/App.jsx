import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import OwnerPage from "./pages/OwnerPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {path: "/", element: <Home />},
      {path: "owner", element: <OwnerPage />},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;