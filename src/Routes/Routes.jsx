import { createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../Layout/LoginLayout';
import Main from '../Layout/Main';
import NotFound from '../Layout/NotFound';
import AddToy from '../pages/AddToy/AddToy';
import AllToys from '../pages/AllToys/AllToys';
import ToyDetails from '../pages/AllToys/ToyDetails';
import Blogs from '../pages/Blogs/Blogs';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/LoginRegister/Login/Login';
import Register from '../pages/LoginRegister/Register/Register';
import MyToys from '../pages/MyToys/MyToys';
import UpdateMyToys from '../pages/MyToys/UpdateMyToys';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      // {
      //     path: '/category/:id',
      //     element: <CategoryToys></CategoryToys>,
      //     loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      // },
      {
        path: '/addToy',
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/addToy'),
      },
      {
        path: '/toyDetails/:id',
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addToy/${params.id}`),
      },
      {
        path: '/myToys',
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateToy/:id',
        element: <UpdateMyToys></UpdateMyToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addToy/${params.id}`),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
