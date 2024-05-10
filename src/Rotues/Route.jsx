import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Assignments from "../pages/Assignments/Assignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import PendingAssignment from "../pages/PendingAssignment/PendingAssignment";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
      },
      {
        path: "/create_assignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/pending_assignment",
        element: <PendingAssignment></PendingAssignment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
