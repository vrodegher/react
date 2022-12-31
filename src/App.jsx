import React from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // infinity = session time
      staleTime: Infinity,
      cacheTIme: Infinity,
    },
  },
});

const App = () => {
  return (
    <div className="m-0 p-0">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header className="w-full py-8 text-center text-2xl font-bold text-pink-600">
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
