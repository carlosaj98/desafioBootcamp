import { createBrowserRouter } from "react-router-dom"
import { LandingPage, FormPage, ResultPage } from "./pages"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/form",
        element: <FormPage />,
    },
    {
        path: "/result",
        element: <ResultPage />,
    },
   
])

export default router
