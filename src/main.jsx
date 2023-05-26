import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Grilla from './pages/Horarios'
import Contacto from './pages/Contacto'
import Actividades from './pages/Actividades'
import AboutUs from './pages/AboutUs'
import Planes from './pages/Planes'
import Actividad, { loader as actividadesLoader } from './components/Actividad'
import OutletIndex from './components/OutletIndex'


const router = createBrowserRouter([
  {
    path: "/mockup-atlas-gym/",
    element: <Home />,
  },
  {
    path: "/Grilla",
    element: <Grilla />,
  }, {
    path: "/Contacto",
    element: <Contacto />,
  }, {
    path: "/Actividades",
    element: <Actividades />,
    children: [
      {
        index: true,
        element: <OutletIndex />
      },
      {
        path: "actividad/:actividadId",
        element: <Actividad />,
        loader: actividadesLoader,
      },
    ],

  }, {
    path: "/AboutUs",
    element: <AboutUs />,
  }, {
    path: "/Planes",
    element: <Planes />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
