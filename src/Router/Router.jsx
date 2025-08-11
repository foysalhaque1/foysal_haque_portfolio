import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MailnLayout/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetailsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/projects/:id',
                element:<ProjectDetails></ProjectDetails>
            },
        ]
    }
]);