import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Root from "./routes/root";
import CusecEmailSignature from "./routes/cusec_email_signature";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
  path: "/home",
  element: <CusecEmailSignature/>,
},
  {
    path: "/cusec_2024_email_signature",
    element: <CusecEmailSignature />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
