import { createBrowserRouter } from "react-router-dom";
import { ListPage } from "./Pages/ListPage/ListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
]);
