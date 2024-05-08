import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import { Home } from './pages/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound.jsx'
import { Projects } from './pages/Projects.jsx'
import { Skills } from './pages/Skills.jsx'
import { Contact } from './pages/Contact.jsx'
import { Project1 } from './components/Project1.jsx'
import { About } from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/Home',
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
      {
        path: '/projects/project1',
        element: <Project1 />
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
