import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import FormPage from "./pages/FormPage"
import ResultPage from "./pages/ResultPage"

const router = createBrowserRouter([
    {
        path: "/test",
        element: <LandingPage />,
    },
    {
        path: "/test/form",
        element: <FormPage />,
    },
    {
        path: "/test/result",
        element: <ResultPage />,
    },
])

export default router