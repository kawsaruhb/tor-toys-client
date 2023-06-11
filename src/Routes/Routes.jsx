import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addToy',
            element: <AddToy></AddToy>
        },
        {
            path: '/myToys',
            element: <MyToys></MyToys>,
            loader: () => fetch('http://localhost:5000/addToy')
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
  ]);

export default router;