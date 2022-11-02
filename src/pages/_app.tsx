import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ErrorBoundary } from '../components/ErrorBoundary';
import GlobalStyle from '../styles/GlobalStyle';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>차량대여 서비스</title>
      </Head>
      <GlobalStyle />
      <ErrorBoundary renderFallback={({ error }) => <h1>{error.message}</h1>}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
