import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MailnLayout/MainLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
]);