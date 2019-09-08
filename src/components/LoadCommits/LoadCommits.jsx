import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { getLS } from './../../services/localStorage'
import getCommitsList from './../../resources/getCommitsList'

import {
  ListSample,
  Title,
  Subtitle,
  Line
} from './../../helpers/StylizedElements'

const LoadCommits = props => {
  const [commits, setCommits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    getCommitsList(getLS('user'), getLS('repo'))
      .then(r => {
        setIsLoading(true)
        setCommits(r.data)
        setIsLoading(false)
      })
  }, [commits.length])

  return (
    <>
      {isLoading ?
        (<p>Loading...</p>) :
        (
          <ListSample>
            {commits.map((i, k) =>
              <li key={k}>
                <Title>{i.commit.message}</Title>
                <Subtitle>{i.commit.author.name}
                  {' • '}
                  {moment(i.commit.author.date).format('LL')}</Subtitle>
                <Line />
              </li>
            )}
          </ListSample>
        )}
    </>
  )
}

export default LoadCommits