
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </CartProvider>
    </BrowserRouter>

);
