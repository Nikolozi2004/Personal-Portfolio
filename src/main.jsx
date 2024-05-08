import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import { Home } from './components/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound.jsx'
import { Projects } from './components/Projects.jsx'
import { Project } from './components/Project.jsx'

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
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/projects/:projectId',
      element: <Project />
    },
  ],
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
