import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Signup from "../componets/form/signup";
import Login from "../componets/form/login";

const router = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,

    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <h1>home</h1>
            }
        ]
    },
    {
        path: "*",
        element: <h1 style={{ color: "red" }} >404</h1>
    }
])

export default router 