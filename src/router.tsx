import { createBrowserRouter } from "react-router-dom";
import { ListPage } from "./Pages/ListPage/ListPage";
import App from "./App";
import { PostPage } from "./Pages/PostInfo/PostPage";
import { SignUp } from "./Pages/SignUpPage/SignUp";
import { SignIn } from "./Pages/SignInPage/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/articles", element: <ListPage /> },
      { path: "/articles/:slug", element: <PostPage /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/sign-in", element: <SignIn /> },
    ],
  },
  { path: "*", element: <App /> },
]);
