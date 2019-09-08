import React from 'react'
import styled from 'styled-components'

const StylizedContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`

const Container = props => {
  const { children } = props
  return (
    <StylizedContainer>
      {children}
    </StylizedContainer>
  )
}

Container.displayName = 'Container'

export default Container
