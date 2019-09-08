import React from 'react'
import { mount, shallow } from 'enzyme'
import Input from './Input'

describe('<Input />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Input />)
    expect(component).toMatchSnapshot()
  })

  it('should receveid props', () => {
    const component = mount(<Input />)
    expect(component.setProps({ ref: 'ref' })).toHaveLength(1)
    expect(component.setProps({ placeholder: 'placeholder' })).toHaveLength(1)
  })

  it('should have a display namwe', () => {
    expect(Input.displayName).toEqual('Input')
  })
}) 