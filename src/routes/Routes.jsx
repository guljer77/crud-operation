import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddChocolate from "../pages/addchocolate/AddChocolate";
import Update from "../pages/update/Update";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-chocolate',
        element: <AddChocolate />
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:5000/chocolate/${params.id}`)
      }
    ]
  }
])