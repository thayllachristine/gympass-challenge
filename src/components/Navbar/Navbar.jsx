import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Octions, { MarkGithub } from '@primer/octicons-react'

import Search from '../Search'
import getUser from './../../resources/getUser'
import { setLS } from './../../services/localStorage'

const StylizedNavbar = styled.nav`
  background-color: #24292e;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`

const LinkToHome = styled(Link)`
  align-items: center;
  display: flex;
  padding: 15px;
  text-decoration: none;
  svg {
    margin-right: 15px;
  }
  p, svg { 
    color: white;
  }
`

const Navbar = withRouter(({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null)
  const userRef = React.createRef()

  const handleSubmit = e => {
    e.preventDefault()
    setUser(userRef.current.value)
    let userValue = userRef.current.value
    getUser(userValue)
      .then(r => {
        setLS('user', r.data.login)
        history.push(`/${userValue}/repositories`)
      })
      .catch(e => {
        history.push('/')
      })
  }

  return (
    <StylizedNavbar>
      <LinkToHome to='/'>
        <Octions icon={MarkGithub} size='medium' ariaLabel='GitHub Mark' />
        <p>GitHub Search</p>
      </LinkToHome>
      <Search onSubmit={handleSubmit}>
        <Search.Input insideNavbar ref={userRef} />
        <Search.Button insideNavbar />
      </Search>
    </StylizedNavbar >
  )
})

export default Navbar