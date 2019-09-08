import React from 'react'
import { shallow } from 'enzyme'
import Navbar from './Navbar'
import Search from './../Search'

describe('<Navbar />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Navbar />)
    expect(component).toMatchSnapshot()
  })

  it('should have a state', () => {
    const component = shallow(<Navbar />)
    expect(component.find('user')).toHaveLength(0)
  })

  it('should have a Search component', () => {
    const component = shallow(<Navbar />)
    expect(component.find('Search')).toBeTruthy()
  })
})