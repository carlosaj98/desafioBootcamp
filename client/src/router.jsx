import { createBrowserRouter } from "react-router-dom"
import { LandingPage, FormPage, ResultPage } from "./pages"

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
