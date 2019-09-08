import React from 'react'
import { mount, shallow } from 'enzyme'
import Search from './search'

describe('<Search />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Search />)
    expect(component).toMatchSnapshot()
  })

  it('should receveid props', () => {
    const component = mount(<Search />)
    expect(component.props('children')).toBeTruthy()
  })

  it('should have a display name', () => {
    expect(Search.displayName).toEqual('Search')
  })
}) 