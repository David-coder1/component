import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import Checkbox from "./components/Checkbox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Button />
    <Input />
    <Checkbox />
  </StrictMode>
);
