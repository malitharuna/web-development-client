import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../Components/404page/NotFound";
import Blogs from "../../Components/Blogs/Blogs";
// import Categories from "../../Components/Categories/Categories";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Course from "../../Components/Courses/Course";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";

import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../Components/Profile/Profile";





export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/allCourse')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/allCourse')
            },
            {
                path: '/course',
                element: <CourseCard></CourseCard>,
                loader: () => fetch('http://localhost:5000/allCourse')
            },
            {
                path: '/category/:id', 
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Course></Course>,
            },
            {
                path: '/course/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/details/${params.id}`),
                element: <CourseDetails></CourseDetails>,
            }
          
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
        path: '/profile',
        element: <Profile></Profile>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },


])