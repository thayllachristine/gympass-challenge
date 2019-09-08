import React from 'react'
import { shallow } from 'enzyme'
import Container from './container'

describe('<Container />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Container />)
    expect(component).toMatchSnapshot()
  })

  it('should contain a props children', () => {
    const component = shallow(<Container />)
    component.setProps({ children: '' })
    expect(component.props().children).toBeDefined()
  })

  it('should have a display name', () => {
    expect(Container.displayName).toEqual('Container')
  })
})