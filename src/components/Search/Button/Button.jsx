import React from 'react'
import styled from 'styled-components'
import Octicon, { Search } from '@primer/octicons-react'

export const StylizedButton = styled.button`
  background-color: #24292e;
  border: ${props => props.insideNavbar ? 'none' : '.1px solid white'};
  border-radius: 2.5px;
  height: 35px;
  width: 35px;
  svg {
    color: white;
  }
`

const Button = () => {
  return (
    <StylizedButton>
      <Octicon icon={Search} size='small' />
    </StylizedButton>
  )
}

Button.displayName = 'Button'

export default Button