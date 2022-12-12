import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/Home/About/About";
import Blog from "../pages/Home/Blog/Blog";
import ContactMe from "../pages/Home/ContactMe/ContactMe";
import Home from "../pages/Home/Home/Home";
import AmazingJohnDetails from "../pages/Home/Projects/AmazingJohnDetails";
import DrWalidDetails from "../pages/Home/Projects/DrWalidDetails";
import Projects from "../pages/Home/Projects/Projects";
import QuizCrackersDetails from "../pages/Home/Projects/QuizCrackersDetails";
import Skills from "../pages/Home/Skills/Skills";


// todo this is react router dom component
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/amazingJohn",
                element: <AmazingJohnDetails></AmazingJohnDetails>
            },
            {
                path: "/drWalid",
                element: <DrWalidDetails></DrWalidDetails>
            },
            {
                path: "/quizCrackers",
                element: <QuizCrackersDetails></QuizCrackersDetails>
            },
            {
                path: "/contactMe",
                element: <ContactMe></ContactMe>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            }
        ]
    }
])