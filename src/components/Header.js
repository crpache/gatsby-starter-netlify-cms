import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Link, useStaticQuery, graphql } from 'gatsby'


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 70px;
  padding: 0 50px;
  background-color: #24292F;
`

const HeaderTitle = styled(Link)`
  color: #fff;
  font-size: 35px;
  font-weight: 100;
  text-decoration: none;
`

const query = graphql`
  {
  site {
    siteMetadata {
      title
    }
  }
}`

const Header = () => {
  const data = useStaticQuery(query)
  return (
    <HeaderWrapper>
      <HeaderTitle to='/'>{data.site.siteMetadata.title}</HeaderTitle>
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header
