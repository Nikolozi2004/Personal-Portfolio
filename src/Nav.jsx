import { Link, NavLink, Outlet } from "react-router-dom"


function Nav() {
  const pages = ['Home', 'Projects', 'Skills', 'Contact', ]
  return (
    <NavLink>
        {pages.map((page) => (
            <Link key={page} to={`/${page}`}>
                {page}
            </Link>
        ))}
        <Outlet />
    </NavLink>

  )
}

export default Nav
