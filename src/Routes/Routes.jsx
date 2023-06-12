import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateMyToys from "../pages/MyToys/UpdateMyToys";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/AllToys/ToyDetails";

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
            path: '/allToys',
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/addToy')
        },
        {
            path: '/toyDetails/:id',
            element: <ToyDetails></ToyDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
        },
        {
            path: '/myToys',
            element: <MyToys></MyToys>,
            loader: () => fetch('http://localhost:5000/addToy')
        },
        {
            path: '/updateToy/:id',
            element: <UpdateMyToys></UpdateMyToys>,
            loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
  ]);

export default router;