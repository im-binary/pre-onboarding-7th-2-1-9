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
        <title>차량 대여 서비스</title>
        <meta name="description" content="차량을 대여해주는 서비스입니다." />
        <meta name="keywords" content="차량 대여, 렌트" />
        <meta name="og:site_name" content="차량 대여 서비스" />
        <meta name="og:title" content="차량 대여 서비스" />
        <meta name="og:description" content="차량을 대여해보세요" />
        <meta name="og:image" content="/images/driving-cat.png" />
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
