import { type PropsWithChildren } from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
const Warrper = styled.div`
  width: 100%;
  height: 100%;
`
const Main = styled.div`
  width: 1400px;
  min-height: calc(100vh - 100px - 160px);
  margin: auto;
  padding-top: 100px;
  background-color: #f1f1f1;
  z-index: 1;
`
const Layout = (props: PropsWithChildren) => {
  return (
    <Warrper>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Warrper>
  )
}

export default Layout
