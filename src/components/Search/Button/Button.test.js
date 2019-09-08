import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Button />)
    expect(component).toMatchSnapshot()
  })

  it('should receveid a Octicon search icon', () => {
    const component = shallow(<Button />)
    expect(component.find('Octicon')).toHaveLength(1)
  })

  it('should have a display name', () => {
    expect(Button.displayName).toEqual('Button')
  })
}) 