import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

createRoot(document.getElementById("root")).render(<App />);
