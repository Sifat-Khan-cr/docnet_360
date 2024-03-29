import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home"
import SignUp from "../../Pages/SignUp/Signup";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }, {
                path: '/login',
                element: <Login></Login>
            }

        ]
    },

])
export default router;