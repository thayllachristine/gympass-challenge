import React from 'react'
import styled from 'styled-components'

import Input from './Input'
import Button from './Button'

export const StylizedSearch = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Search = props => {
  const { children, onSubmit } = props
  return (
    <StylizedSearch onSubmit={onSubmit}>
      {children}
    </StylizedSearch>
  )
}

Search.Input = Input
Search.Button = Button

Search.displayName = 'Search'

export default Search
