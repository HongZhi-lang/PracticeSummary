import { RouteObject } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Login from "../pages/Login"

export type RouteObjectNew = RouteObject & {
  auth?: boolean
  children?: RouteObjectNew[]
}

const routes: RouteObjectNew[] = [
  {
    path: "/",
    element: <Home />,
    auth: true,
  },
  { path: "/login", element: <Login />, auth: false },
  {
    path: "*",
    element: <NotFound />,
    auth: false,
  },
]
export default routes
