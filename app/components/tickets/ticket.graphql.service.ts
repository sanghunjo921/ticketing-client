import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:80/graphql",
  cache: new InMemoryCache(),
});

export const GET_POPULAR_TICKETS_BY_CATEGORIES = gql`
  query GetPopularTicketsByCategories {
    getPopularTicketsByCategories(
      input: { categories: [SPORTS, CONCERTS, MOVIES] }
    ) {
      ok
      sportsTicket {
        id
        title
        description
      }
      concertsTicket {
        id
        title
      }
      moviesTicket {
        id
        title
        description
      }
    }
  }
`;

export const categoryTickets = async () => {
  const data = await client.query({
    query: GET_POPULAR_TICKETS_BY_CATEGORIES,
  });

  console.log({ data });
  return data;
};

export default client;
