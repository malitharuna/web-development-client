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
import Profile from "../../Components/Profile/Profile";
import Pdf from "../../Components/Pdf/Pdf";
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import Faq from "../../Components/FAQ/Faq";


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
                element:  <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
            } 
        ]
    },
    {
        path: '/faq',
        element: <Faq></Faq>
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
        path: '/course/download/pdf/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
        element: <PrivateRoute><Pdf></Pdf> </PrivateRoute>
    },
    {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },


])