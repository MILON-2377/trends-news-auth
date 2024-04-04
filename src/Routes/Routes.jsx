import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../Pages/Home";
import Navbar from "../Pages/Navbar";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Navbar',
                element: <Navbar></Navbar>
            }
        ]
    }
])

const Routes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;