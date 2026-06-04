"use client";

import client from "@/services/apollo";
import { ApolloProvider } from "@apollo/client/react";


type ProvidersProps = {
  children: React.ReactNode;
};

export function ApolloClientProviders({ children }: ProvidersProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
