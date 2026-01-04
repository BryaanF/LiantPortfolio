import React from "react";
import { createRoot } from "react-dom/client"; // API Baru untuk React 18
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Mengambil elemen root
const container = document.getElementById("root");

// Inisialisasi root menggunakan createRoot
const root = createRoot(container);

// Proses rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// PWA Service Worker
serviceWorker.unregister();