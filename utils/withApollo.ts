import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_API_URL as string,
  });

export const withApollo = createWithApollo(createClient);
