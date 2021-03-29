import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap');    
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    background-color: #24292F;
  }

  p {
    line-height: 2;
  }
`
const LayoutWrapper = styled.main`
  display: flex;
  margin: 0 ;
  padding: 0;
  height: 90vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
    <Footer />
  </>
)

export default Layout
