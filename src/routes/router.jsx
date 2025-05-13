import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllReviews from "../pages/reviews/AllReviews";
import AddReview from "../pages/AddReview/AddReview";
import MyReviews from "../pages/MyReviews/MyReviews";
import Watchlist from "../pages/Watchlist/Watchlist";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "../utils/PrivateRoute/PrivateRoute";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/highest"),
      },
      {
        path: "/reviews",
        element: <AllReviews />,
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/addReviews",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: <MyReviews />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
