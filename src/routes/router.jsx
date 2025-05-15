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
import Edit from "../pages/Edit/Edit";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://assignment-10-server-omega-mauve.vercel.app/highest"),
      },
      {
        path: "/reviews",
        element: <AllReviews />,
        loader: () =>
          fetch("https://assignment-10-server-omega-mauve.vercel.app/reviews"),
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
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <PrivateRoute>
            <Watchlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-omega-mauve.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/edit/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-omega-mauve.vercel.app/reviews/${params.id}`
          ),
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
