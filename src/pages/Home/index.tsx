// import React from "react"
import { Button } from "antd"
export default function Home() {
  const layOut = () => {
    sessionStorage.removeItem("token")
    location.reload()
  }
  return (
    <div>
      <p>Home</p>
      <Button type="primary" onClick={layOut}>
        退出
      </Button>
    </div>
  )
}
