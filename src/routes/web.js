import { useRoutes } from "react-router-dom";
import Homes from "../pages/Homes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SingupPassword from "../pages/SingupPassword";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homes />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup-password",
      element: <SingupPassword />,
    },
    { path: "*", element: <div>Error</div> },
  ]);

  return element;
};

export default Routes;
