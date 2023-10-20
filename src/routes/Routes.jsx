import Home from '../Pages/Home/Home';
import Root from '../Layouts/Root'
import { createBrowserRouter } from "react-router-dom";
import AddProduct from '../Pages/AddProduct/AddProduct';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Details from '../Pages/Details/Details';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute';
import UpdateData from '../Pages/UpdateData/UpdateData';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Data.json')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/details',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/users`),

            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: "/users/:id",
                element: <PrivateRoute><UpdateData></UpdateData></PrivateRoute>,
                loader: ({params}) => {
                  console.log(params);
                  return fetch(`http://localhost:5000/users/${params.id}`);
                },
              },
        ]
    }
])

export default router;