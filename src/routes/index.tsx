import { useEffect, useState } from "react"
import { Location, NavigateFunction, useLocation, useNavigate, useRoutes } from "react-router-dom"
import { RouteObject } from "react-router-dom"

export type RouteObjectNew = RouteObject & {
  auth?: boolean
  children?: RouteObjectNew[]
}

function searchChrouteDetail(path: string, routes: RouteObjectNew[]): RouteObjectNew | null {
  for (const item of routes) {
    if (item.path === path) {
      return item
    }
    if (item.children) {
      return searchChrouteDetail(path, item.children)
    }
  }
  return null
}

function guard(location: Location, navigate: NavigateFunction, routes: RouteObjectNew[]): any {
  const { pathname } = location

  const routeDetail = searchChrouteDetail(pathname, routes)
  if (!routeDetail) {
    return navigate("/404")
  }

  // if (routeDetail.auth) {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     navigate(routeDetail.path as string)
  //     return false
  //   } else {
  //     navigate("/login")
  //   }
  // } else {
  //   navigate(routeDetail.path as string)
  // }
  navigate(routeDetail.path as string)
}

export const RouterGurad = (routes: RouteObjectNew[]) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [bo, setBo] = useState(false)

  useEffect(() => {
    setBo(guard(location, navigate, routes))
  }, [])

  const Route = useRoutes(routes)

  return Route
  return bo ? Route : null
}
