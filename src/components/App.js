import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import ErrorPage from "./error/errorpage";
import Login from "./login/login";
import MyMap from "./map/map";
import SignIn from "./signIn/singIn";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn></SignIn>,
    errorElement:<ErrorPage />,

  },
  {
    path:"/login",
    element: <Login></Login>,
    errorElement:<ErrorPage />
  },
  {
    path:"/sginin",
    element: <SignIn></SignIn>,
    errorElement:<ErrorPage />
  },
  {
    path:"/dashboard",
    element: <MyMap></MyMap>,
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
