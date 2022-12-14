import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import AllCourse from "../../Pages/AllCourse/AllCourse";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import FAQs from "../../Pages/FAQs/FAQs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Premium from "../../Pages/SingleCourse/Premium";
import SingleCourse from "../../Pages/SingleCourse/SingleCourse";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/game-courses')
            },
            {
                path: '/courses/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/game-courses/${params.id}`)
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQs></FAQs>
            },
            {
                path: '/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,

            },
            {
                path: '/allcourse',
                element: <AllCourse></AllCourse>
            }
        ]
    }
])