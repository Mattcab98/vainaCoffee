import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { HomePage } from './components/Home/HomePage.jsx';
import { AboutDetails } from './components/About/AboutDetails/AboutDetails.jsx';
import { CafeEspecialidad } from './components/category/cafeEspecialidad/CafeEspecialidad.jsx';
import { Cafeteras} from './components/category/cafeteras/Cafeteras.jsx'
import { HomeDeco} from './components/category/homeDeco/HomeDeco.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'about',
        element: <AboutDetails/>
      },
      {
        path: 'cafeEspecialidad',
        element: <CafeEspecialidad/>
      },
      {
        path: 'cafeteras',
        element: <Cafeteras/>
      },
      {
        path: 'homeDeco',
        element: <HomeDeco/>
      },
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
