import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
