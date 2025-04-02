import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
// import UserHomeSession from "./pages/UserHomeSession";
// import AdminHomeSession from "./pages/AdminHomeSession";
// import OwnerPage from "./pages/OwnerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {path: "/", element: <Home />},
      // {path: "owner", element: <OwnerPage />},
      // {path: "admin", element: <AdminHomeSession />},
      // {path: "user", element: <UserHomeSession />},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;