import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootProvider from "./components/provider/RootProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>
);
