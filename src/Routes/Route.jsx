import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import UpdateClass from "../Pages/Dashboard/Instructor/UpdateClass";
import Payment from "../Pages/Dashboard/Payment/Payment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/instructor',
        element: <Instructors></Instructors>
      },
      {
        path: '/Classes',
        element: <Classes></Classes>
      }

    ]
  },
  {
    // dashboard route
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        //student Route
        path: 'selectedClass',
        element: <SelectedClass></SelectedClass>
      },
      {
        path: 'enrolledClass',
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      //instructor route
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
      {
        path:'updateClass/:id',
        element:<UpdateClass></UpdateClass>
      },
      // admin route  
      {
        path:'manageClasses',
        element:<ManageClasses></ManageClasses>
      },
      {
        path:'manageUser',
        element:<ManageUser></ManageUser>
      }
    ]
  },

]);

export default router;