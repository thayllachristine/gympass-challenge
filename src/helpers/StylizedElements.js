import styled from 'styled-components'

const ListWithoutStyle = styled.ul`
  li {
    list-style-type: none;
  }
`

export const ListSample = styled(ListWithoutStyle)`
  padding: 0 5px;
`

export const ListComplex = styled(ListWithoutStyle)`
  li {
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    margin-bottom: 15px;
    padding: 10px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`

export const Subtitle = styled.h3`
  color: #586069;
  font-size: 14px;
  font-weight: 500;
  margin: 5px 0;
`

export const Line = styled.hr`
  border: .5px solid #ccc;
  margin: 10px 0;
`