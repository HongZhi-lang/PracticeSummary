import Layout from "./Layout"
import { RouterGurad } from "./routes"
import routes from "./routes/routes"

function App() {
  return <Layout>{RouterGurad(routes)}</Layout>
}

export default App
