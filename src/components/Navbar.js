import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  min-height: 70px;
  background-color: #24292F;
  margin: 0 40px;
`

const NavbarItem = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  text-decoration: none;
  margin: 0 20px;
`

const Navbar = () => (
  <NavbarWrapper>
    <NavbarItem to='/'>Home</NavbarItem>
    <NavbarItem to='/about'>About</NavbarItem>
    <NavbarItem to='/services'>Services</NavbarItem>
    <NavbarItem to='/contact'>Contact</NavbarItem>
  </NavbarWrapper>
)

export default Navbar
