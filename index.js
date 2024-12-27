// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// //import App from "./App";
// import projectroute from "./projectroute";

// const result = ReactDOM.createRoot(document.getElementById("root"));

// result.render(<RouterProvider router={projectroute} />);


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import projectroute from "./projectroute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={projectroute} />
  </React.StrictMode>
);
