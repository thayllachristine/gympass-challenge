import React from 'react'
import { mount, shallow } from 'enzyme'
import LoadCommits from './LoadCommits'
import getCommitList from './../../resources/getCommitsList'

const data = {
  user: 'thayllachristine',
  repo: 'alura',
  message: 'Aula 3 - Arrays, Loops e estilos',
  date: '2019-01-17T01:52:25Z'
}

describe('<LoadCommits />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<LoadCommits />)
    expect(component).toMatchSnapshot()
  })

  it('should return data on request', () => {
    getCommitList(data.user, data.repo)
      .then(infos => {
        expect(infos).toBeTruthy()
      })
  })

  it('should have a list', () => {
    const component = mount(<LoadCommits />)
    expect(component.find('ListSample')).toBeTruthy()
    expect(component.find('ListSample').find('Title')).toHaveLength(0)
    expect(component.find('ListSample').find('Subtitle')).toHaveLength(0)
  })
})