import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Wraps the application in BrowserRouter so route navigation works
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);