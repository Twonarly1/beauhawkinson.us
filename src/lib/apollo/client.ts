import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import authLink from './authLink'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
