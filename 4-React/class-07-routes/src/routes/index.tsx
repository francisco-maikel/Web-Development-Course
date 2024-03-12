import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { Contact } from "../pages/Contact";
import { App } from "../pages/App";

export const router = createBrowserRouter([

{
path: "/",
element: <App />,
children: [
    {path:"home", element: <Home/>},
    {path:"gallery", element: <Gallery />},
    {path:"contact", element: <Contact />},
  ]
 }
]);




    