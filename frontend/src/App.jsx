import "./App.css";

import Header from "./components/navbar/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import AdminRegistration from "./pages/admin-registeration/AdminRegistration";
import Body from "./pages/body/Body";
import VerifyAdminUserPage from "./pages/admin-registeration/VerifyAdminUserPage";
import ClientPage from "./components/class-based/client-page/ClientPage";
import SideMenu from "./components/side-menu/SideMenu";
import AdminLogin from "./pages/admin-login/AdminLogin";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const { adminUsers } = useSelector((state) => state.adminUsers);

  return (
    <>
      <SideMenu />

      <Header />

      <h1 className="font-bold text-center w-full p-4">
        Currently working in this project
        {!adminUsers?._id ? (
          <article className="flex flex-col">
            <p>email: admin@gmail.com</p>
            <p>pw: Asdfghj123</p>
          </article>
        ) : (
          ""
        )}
      </h1>
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
        element: <AdminLogin />,
      },
      {
        path: "/dashboard",
        element: <Body />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "admin-register",
        element: <AdminRegistration />,
      },
      {
        path: "admin-user/verify-email",
        element: <VerifyAdminUserPage />,
      },
      {
        path: "/client",
        element: <ClientPage />,
      },
    ],
  },
]);

export default AppRouter;
