import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Projects/Project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
