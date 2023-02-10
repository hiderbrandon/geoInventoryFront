import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./errorpage";
import Login from "./login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div><h1> this is HOME </h1></div>,
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
