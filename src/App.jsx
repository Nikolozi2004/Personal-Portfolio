import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { AnimatePresence } from "framer-motion"
function App() {
  return (
    <Fragment>
      <NavBar />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </Fragment>
  )
}

export default App
