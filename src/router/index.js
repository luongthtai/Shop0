import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import App from "../App";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import Cart from "../pages/Cart/Cart";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import CheckOut from "../pages/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/trackorder",
                element: <TrackOrder />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/:id",
                element: <SingleProduct />
            },
            {
                path: "/checkout",
                element: <CheckOut />
            }
        ]
    },
])

export default router