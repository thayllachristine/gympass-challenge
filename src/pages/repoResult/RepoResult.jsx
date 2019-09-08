import React from 'react'
import styled from 'styled-components'

import Navbar from './../../components/Navbar'
import { getLS } from './../../services/localStorage'
import RepoList from '../../components/RepoList'

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`

const TitlePage = styled.h1`
  color: #586069;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
`

const RepoResult = ({ user, repo }) => {
  return (
    <>
      <Navbar />
      <Container>
        <TitlePage>@{getLS('user')}'s repositories</TitlePage>
        <RepoList user={user} repo={repo} />
      </Container>
    </>
  )

}

export default RepoResult