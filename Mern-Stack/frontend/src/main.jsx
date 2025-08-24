import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CategoryProvider } from "./Contexts/CategoryProvider.jsx";
import { ProductProvider } from "./Contexts/ProductProvider.jsx";
import { Layout } from "./layouts/Layout.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <Layout>
            <App />
          </Layout>
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>
);
