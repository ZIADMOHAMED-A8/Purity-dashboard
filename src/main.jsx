import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./features/auth/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const root = createRoot(document.getElementById("root"));
export const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
