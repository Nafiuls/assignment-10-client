import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllReviews from "../pages/reviews/AllReviews";
import AddReview from "../pages/AddReview/AddReview";
import MyReviews from "../pages/MyReviews/MyReviews";
import Watchlist from "../pages/Watchlist/Watchlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <AllReviews />,
      },
      {
        path: "/addReviews",
        element: <AddReview />,
      },
      {
        path: "/myReviews",
        element: <MyReviews />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);

export default router;
