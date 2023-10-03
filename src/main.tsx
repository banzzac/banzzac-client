import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import { Chat, Feed, Friends, Profile, Search } from "./pages";
import ErrorPage from "./pages/ErrorPage";
import Page404 from "./pages/Page404";
import reset from "./reset";

// 오오오오오 live share 좋은듯

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route path="profile" element={<Profile />} />
        <Route path="friends" element={<Friends />} />
        <Route path="chat" element={<Chat />} />
        <Route path="feed" element={<Feed />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="/login" element={<div>login</div>} />
      <Route path="/*" element={<Page404 />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={reset} />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
