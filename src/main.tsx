import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./locales/config"; // ✅ initializes i18next
import "./locales";

import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
