import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./errorpage";
import Login from "./login";
import Map from "./map/map";


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
