import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ErrorBoundary } from '../components/ErrorBoundary';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyle';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>차량대여 서비스</title>
      </Head>
      <GlobalStyle />
      <ErrorBoundary
        renderFallback={({ error, reset }) => (
          <>
            <h1>{error.message}</h1>
            <button onClick={reset}>확인</button>
          </>
        )}
      >
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
