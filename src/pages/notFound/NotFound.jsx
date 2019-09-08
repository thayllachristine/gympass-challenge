import React from 'react'
import styled from 'styled-components'

import Main from './../../helpers/Main'
import Navbar from './../../components/Navbar'
import inspectocat from './../../assets/inspectocat.jpg'

const NotFoundMain = styled(Main)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 18px;
    font-style: italic;
    font-weight: 200;
    margin-bottom: 20px;
  }
  img {
    border-radius: 100%;
    box-shadow: 5px 10px 5px #ccc;
    width: 350px;
  }
`

const NotFound = () => (
  <>
    <Navbar />
    <NotFoundMain>
      <p>not found!</p>
      <img src={inspectocat} alt='Inspectocat' />
    </NotFoundMain>
  </>
)

export default NotFound