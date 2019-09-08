import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import RepoResult from './pages/repoResult'
import CommitsResult from './pages/commitsResult'
import NotFound from './pages/notFound'

import GlobalStyle from './helpers/GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route path='/' exact component={Home} />
      <Route path='/:user/repositories' component={RepoResult} />
      <Route path='/:user/:repo/commits' component={CommitsResult} />
      <Route path='/error' component={NotFound} />
    </Router>
  )
}

export default App;
