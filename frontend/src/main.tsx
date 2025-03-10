import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

import { App } from "./App";
import { Home } from "./pages/Home";
import Countries from "./pages/countries";
import Login from "./pages/login";
import { Activities } from "./pages/activities/Activities";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="countries" element={<Countries />} />
            <Route path="activities" element={<Activities />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  </StrictMode>
);
