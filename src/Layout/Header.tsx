import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Button } from "antd"

import Img from "../assets/react.svg"

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  margin: 0 auto 20px;
  background-color: #ffffff;
  box-shadow: 0 15px 10px 2px #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`
const StyledHeader = styled.header`
  width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledUl = styled.ul`
  width: 800px;
  display: flex;
  li {
    margin: 0 10px;
    font-size: 18px;
    line-height: 80px;
    list-style-type: none;
  }
  .active {
    color: #535bf2;
  }
`
const Myself = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
`
const Header = () => {
  const navigate = useNavigate()

  const navList = [
    { title: "首页", path: "/" },
    { title: "列表", path: "/list" },
  ]
  const layOut = () => {
    navigate("login")
  }

  return (
    <Wrapper>
      <StyledHeader>
        <h2>LOGO</h2>
        <StyledUl>
          {navList.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </StyledUl>
        <Myself>
          <img src={Img} alt="" />
          <Button type="text" onClick={layOut}>
            退出
          </Button>
        </Myself>
      </StyledHeader>
    </Wrapper>
  )
}

export default Header
