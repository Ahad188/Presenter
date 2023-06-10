import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
          <HelmetProvider>
           <QueryClientProvider client={queryClient}>
              <div className="max-w-screen-xl mx-auto">
                <RouterProvider router={router} />
              </div>
           </QueryClientProvider>
          </HelmetProvider>
      </AuthProvider>
    </>
  );
}

export default App;
