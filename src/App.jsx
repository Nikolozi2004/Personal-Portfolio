import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  )
}

export default App
