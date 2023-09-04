import "./App.css";

import Header from "./components/navbar/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import AdminRegistration from "./pages/admin-registeration/AdminRegistration";
import Body from "./pages/body/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <h1 className="font-bold">Currently working in this project</h1>
      <Outlet />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "admin-register",
        element: <AdminRegistration />,
      },
    ],
  },
]);

export default AppRouter;
