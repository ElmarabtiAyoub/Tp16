import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:8082/graphql', // <-- changer le port et endpoint ici
  credentials: 'include', // si tu as besoin des cookies
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});