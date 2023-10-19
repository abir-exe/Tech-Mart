import Home from '../Pages/Home/Home';
import Root from '../Layouts/Root'
import { createBrowserRouter } from "react-router-dom";
import AddProduct from '../Pages/AddProduct/AddProduct';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Details from '../Pages/Details/Details';

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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/details',
                element: <Details></Details>
            }
        ]
    }
])

export default router;