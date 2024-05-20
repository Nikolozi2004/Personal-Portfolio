import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound.jsx'
import { Projects } from './pages/Projects.jsx'
import { Skills } from './pages/Skills.jsx'
import { Contact } from './pages/Contact.jsx'
import { About } from './pages/About.jsx'
import { AnimatePresence } from 'framer-motion'



const router = createBrowserRouter([
  {
    path: '/Personal-Portfolio',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/Personal-Portfolio',
        element: <Home />,
      },
      {
        path: '/Personal-Portfolio/home',
        element: <Home />,
      },
      {
        path: '/Personal-Portfolio/About',
        element: <About />,
      },
      {
        path: '/Personal-Portfolio/Skills',
        element: <Skills />
      },
      {
        path: '/Personal-Portfolio/Contact',
        element: <Contact />
      },
      {
        path: '/Personal-Portfolio/projects',
        element: <Projects />,
      },
      // {
      //   path: '/projects/project1',
      //   element: <Project1 />
      // },
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)
