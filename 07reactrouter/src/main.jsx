import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Github, {githubInfoLoader} from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="user/" element={<User />} >
        <Route path=":userid" element={<User />} />
      </Route>
      {/* <Route path="github" element={<Github />} /> */}
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
        />
      <Route path="*" element={<div>No Data</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <App />
);