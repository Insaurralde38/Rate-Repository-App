import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => new ApolloClient({
  // uri: 'http://localhost:4000/graphql',
  uri: 'http://192.168.0.13:4000/graphql',
  cache: new InMemoryCache(),
})

export default createApolloClient