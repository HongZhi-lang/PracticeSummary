import { RouteObject } from "react-router-dom"

export type RouteObjectNew = RouteObject & {
  auth?: boolean
  children?: RouteObjectNew[]
}
