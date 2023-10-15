import { createBrowserRouter } from "react-router-dom";
import ControlRoot from "./ControlRoot";
import AddCoffee from "../AllComponent/AddCoffee";
import UpdateCoffee from "../AllComponent/UpdateCoffee";
import App from "../App";
import EditPage from "../AllComponent/EditPage";
import SignUp from "../AllComponent/SignUp";
import Users from "../AllComponent/Users";
import SignIn from "../AllComponent/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <ControlRoot></ControlRoot>,

    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch(`https://coffee-server-module-56.vercel.app/user/`),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/edit/:id",
        element: <EditPage></EditPage>,
        loader: ({ params }) =>
          fetch(`https://coffee-server-module-56.vercel.app/user/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch(`https://coffee-server-module-56.vercel.app/createUsers/`)
      },
    ],
  },
]);

export default Router;
