import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http//localhost:80/",
  cache: new InMemoryCache(),
});

export const GET_POPULAR_TICKETS_BY_CATEGORIES = gql`
  query GetPopularTicketsByCategories {
    getPopularTicketsByCategories(input: { categories: [SPORTS, CONCERTS] }) {
      ok
      sportsTicket {
        title
        description
      }
      concertsTicket {
        title
      }
    }
  }
`;

export default client;
