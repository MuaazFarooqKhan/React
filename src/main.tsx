import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { CountriesContextProvider } from "src/context/countriesContext";
import { ChangeModeContextProvider } from "src/context/changeModeContext";
import App from "./components/App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
debugger
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChangeModeContextProvider>
          <CountriesContextProvider>
            <App />
          </CountriesContextProvider>
        </ChangeModeContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
