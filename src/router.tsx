import { createBrowserRouter } from "react-router-dom";
import { ListPage } from "./Pages/ListPage/ListPage";
import App from "./App";
import { PostPage } from "./Pages/PostInfo/PostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/articles", element: <ListPage /> },
      { path: "/articles/:slug", element: <PostPage /> },
    ],
  },
  { path: "*", element: <App /> },
]);
