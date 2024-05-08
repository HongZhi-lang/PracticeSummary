import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.scss"
import { BrowserRouter as Router } from "react-router-dom"
import { App as AntdApp } from "antd"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AntdApp>
      <Router>
        <App />
      </Router>
    </AntdApp>
  </React.StrictMode>
)
