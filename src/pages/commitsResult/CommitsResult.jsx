import React from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import Container from './../../components/Container'
import LoadCommits from '../../components/LoadCommits'

const TitlePage = styled.h1`
  color: #586069;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
`


const CommitsResult = () => {
  return (
    <>
      <Navbar />
      <Container>

        <TitlePage>Commits list</TitlePage>

        <LoadCommits />
      </Container>
    </>
  )
}

export default CommitsResult