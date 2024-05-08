import './App.css'
import { RouterGurad } from './routes'
import routes from "./routes/routes"

function App() {
  return <div>{RouterGurad(routes)}</div>
}

export default App
