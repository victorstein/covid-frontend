import { ApolloClient, InMemoryCache } from '@apollo/client'
import config from '../config'
import stores from '../stores'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ...stores
      }
    }
  }
})

const client = new ApolloClient({
  uri: config.backendUrl,
  cache
})

export default client
