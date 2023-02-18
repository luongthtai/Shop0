import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "about",
        element: <About />
    },
])

export default router