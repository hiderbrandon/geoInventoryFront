import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import ErrorPage from "./error/errorpage";
import Login from "./login/login";
import Map from "./map/map";
import Dashboard from "../components/dashboard/dashboard"


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Map></Map>,
    errorElement:<ErrorPage />,

  },
  {
    path:"/login",
    element: <Login></Login>,
    errorElement:<ErrorPage />
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement:<ErrorPage />
  }
]);





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={ routes }></RouterProvider>
      </header>
    </div>
  );
}

export default App;
