import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../Components/404page/NotFound";
import Blogs from "../../Components/Blogs/Blogs";
import Categories from "../../Components/Categories/Categories";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../layout/Main";
// import NotFound from "../../pages/404page/NotFound";
// import Category from "../../Pages/Category/Category/Category";
// import Profile from "../../Pages/Others/Profile/Profile";

// import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home />,
                // loader: () => fetch('https://assignment-10-server-hksyjnu4u-sujonmia5.vercel.app/allCourse')
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                // loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/category/${params.id}`)
            },
          
        ]
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },


])