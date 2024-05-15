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
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Skills',
        element: <Skills />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/projects',
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
