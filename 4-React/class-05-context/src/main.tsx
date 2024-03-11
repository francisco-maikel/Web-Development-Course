import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { ContextPage } from "./pages/ContextPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ContextPage />
  </React.StrictMode>
);
