import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home-1";
import About from "./components/about";
import Service from "./components/service";
import Contact from "./components/contact";
import NotFound from "./components/error";

const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Service /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
