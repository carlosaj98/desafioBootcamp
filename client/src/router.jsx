import { createBrowserRouter } from "react-router-dom"
import { LandingPage, ResultPage, QuizPage, RegisterPage } from "./pages"
// import PdfButton from "./pages/ResultPage/PdfButton"
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/form",
        element: <QuizPage />,
    },
    {
        path: "/result",
        element: <ResultPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },

   
])

export default router
