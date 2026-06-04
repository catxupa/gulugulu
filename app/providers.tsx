"use client";


import client from "@/services/apollo";

type ProvidersProps = {
  children: React.ReactNode;
};

export function ApolloClientProviders({ children }: ProvidersProps) {
  return <ApolloClientProviders>{children}</ApolloClientProviders>;
}
