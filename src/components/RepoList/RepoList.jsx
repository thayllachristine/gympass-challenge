import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'
import Octicon, { GitBranch, Star } from '@primer/octicons-react'

import { getLS, setLS } from './../../services/localStorage'
import getRepoList from './../../resources/getRepoList'

import {
  ListComplex,
  Subtitle
} from './../../helpers/StylizedElements'


const TitleWithLink = styled(Link)`
  color: #0366d6;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`

const InfosDivider = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  width: 200px;
  span {
    color: #586069;
    font-size: 12px;
  }
`

const RepoList = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getRepoList(getLS('user'))
      .then(r => {
        setIsLoading(true)
        setRepos(r.data)
        setIsLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repos.length])

  return (
    <>
      {!!isLoading ?
        (<p>Loading...</p>) : (
          <ListComplex>
            {repos.map((item, k) =>
              <li key={k}>
                <TitleWithLink
                  to={`/${getLS('user')}/${item.name}/commits`}
                  onClick={() => setLS('repo', item.name)}>
                  {item.name}
                </TitleWithLink>
                <Subtitle>{item.description}</Subtitle>
                <InfosDivider>
                  {!!item.stargazers_count
                    ? <span><Octicon icon={Star} />{' '}{item.stargazers_count}</span> : ''
                  }
                  {!!item.forks_count
                    ? <span><Octicon icon={GitBranch} />{' '}{item.forks_count}</span> : ''
                  }
                  <span>{moment(item.updated_at).format('LLL')}</span>
                </InfosDivider>
              </li>
            )}
          </ListComplex>
        )
      }
    </>
  )
}

export default RepoList