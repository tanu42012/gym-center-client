import { createBrowserRouter } from "react-router-dom";






import Home from "../Layout.jsx/Home.jsx";
import Root from "../Layout.jsx/Root.jsx";
import Schedule from "../Schedule/Schedule.jsx";
import AddCoffee from "../addSchedule/AddSchedule.jsx";

import SignIn from "../signin/SignIn.jsx";
import SignUp from "../signup/SignUp.jsx";
import UpdateSchedule from "../updateSchedule/UpdateSchedule.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allSchedule",
        element: <Schedule></Schedule>,
      },

      {
        path: "/addSchedule",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/update/:id",
        element: <UpdateSchedule></UpdateSchedule>,
      },
    ],
  },
  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;