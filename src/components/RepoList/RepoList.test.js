import React from 'react'
import { mount, shallow } from 'enzyme'
import RepoList from './RepoList'
import getRepoList from './../../resources/getRepoList'

const data = {
  user: 'thayllachristine',
  repo: 'alura',
  message: 'Aula 3 - Arrays, Loops e estilos',
  date: '2019-01-17T01:52:25Z'
}

describe('<RepoList />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<RepoList />)
    expect(component).toMatchSnapshot()
  })

  it('should have a list', () => {
    const component = mount(<RepoList />)
    expect(component.find('ListComplex')).toBeTruthy()
    expect(component.find('ListComplex').find('TextWithLink')).toBeTruthy()
    expect(component.find('ListComplex').find('Subtitle')).toBeTruthy()
    expect(component.find('ListComplex').find('InfosDivider')).toBeTruthy()
  })
})