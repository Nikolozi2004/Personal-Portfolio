import { Fragment } from "react"
import { NavLink, Outlet } from "react-router-dom"


function Nav() {
  const pages = ['Home', 'About', 'Projects', 'Skills', 'Contact',]
  return (
    <Fragment>
      <div className="">
        {pages.map((page) => (
          <NavLink 
          className={({ isActive }) => { return isActive ? 'text-blue-600' : '' }} 
          key={page} 
          to={`/${page}`}>
            {page}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Nav
