import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './setup/apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './layout/main'

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Main />
      </Router>
    </ApolloProvider>
  )
}

export default App
