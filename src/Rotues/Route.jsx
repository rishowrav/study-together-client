import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Assignments from "../pages/Assignments/Assignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import PendingAssignment from "../pages/PendingAssignment/PendingAssignment";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import MySubmittedAssignment from "../pages/MySubmittedAssignment/MySubmittedAssignment";
import ViewAssignment from "../components/ViewAssignment/ViewAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/assignments"),
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:3000/assignments"),
      },
      {
        path: "/create_assignment",
        element: (
          <PrivateRoutes>
            <CreateAssignment></CreateAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/pending_assignment",
        element: (
          <PrivateRoutes>
            <PendingAssignment></PendingAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/my_submitted_assignment",
        element: (
          <PrivateRoutes>
            <MySubmittedAssignment></MySubmittedAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/view_assignment",
        element: (
          <PrivateRoutes>
            <ViewAssignment></ViewAssignment>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
