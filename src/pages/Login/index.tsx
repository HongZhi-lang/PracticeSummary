import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  useEffect(() => {
    sessionStorage.setItem("token", "1")
  }, [])
  return (
    <div>
      <p>login</p>
      <Link to="/">登录</Link>
    </div>
  )
}
