import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const HomeWrapper = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  //background: rgba(0,0,0,.4);
`
const Title = styled.h1`
  color: #444;
  font-size: 100px;
  margin: 0;
`

const imgQuery = graphql`
  {
    fluid:file(relativePath: {eq: "texture-3.jpg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Home = () => {
  const data = useStaticQuery(imgQuery)

  return (
    <Layout>
      <HomeWrapper>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <TitleWrapper>
          <Title>Home Page</Title>
        </TitleWrapper>
      </HomeWrapper>
    </Layout>
  )
}

export default Home
