import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
// import NotFound from "../../pages/404page/NotFound";
// import Category from "../../Pages/Category/Category/Category";
// import Home from "../../Pages/Home/Home/Home";
// import Login from "../../Pages/Login/Login/Login";
// import Register from "../../Pages/Login/Register/Register";

// import Profile from "../../Pages/Others/Profile/Profile";

// import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Home></Home>,
            //     // loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            // },
            // {
            //     path: '/category/:id',
            //     element: <Category></Category>,
            //     // loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/category/${params.id}`)
            // },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path:'/register',
            //     element: <Register></Register>
            // },
            // {
            //     path: '*',
            //     element: <NotFound></NotFound>
            // },
        ]
    }
])