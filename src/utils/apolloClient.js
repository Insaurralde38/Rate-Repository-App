import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const GRAPHQL_HOST = Constants.expoConfig?.extra?.GRAPHQL_HOST || 'localhost';

const createApolloClient = () =>
  new ApolloClient({
    uri: `http://${GRAPHQL_HOST}:4000/graphql`,
    cache: new InMemoryCache(),
  });

export default createApolloClient;