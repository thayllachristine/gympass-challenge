import React, { useState } from 'react'
import styled from 'styled-components'

import getUser from '../../resources/getUser'
import { setLS } from '../../services/localStorage'

import Main from './../../helpers/Main'
import Search from './../../components/Search'
import Octicon, { LogoGithub } from '@primer/octicons-react'

const HomeMain = styled(Main)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr {
    border: .5px solid #ccc;
    margin-bottom: 40px;
    margin-top: 5px;
    width: 225px;
  }

  p {
    color: #586069;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  
`

const Home = props => {
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
        props.history.push(`/${userValue}/repositories`)
      })
      .catch(e => {
        props.history.push('/error')
      })
  }

  return (
    <HomeMain>
      <Octicon icon={LogoGithub} size='large' />
      <hr />
      <p>search for an user:</p>
      <Search onSubmit={handleSubmit}>
        <Search.Input ref={userRef}  />
        <Search.Button />
      </Search>
    </HomeMain>
  )
}

export default Home
