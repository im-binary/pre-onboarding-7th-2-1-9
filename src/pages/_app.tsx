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
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://pre-onboarding-7th-2-1-9-two.vercel.app/cars"
        />
        <meta property="og:title" content="차량 대여 서비스" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/76990149/199638933-76673587-4e66-49ad-9f8e-f8aedfaba914.png"
        />
        <meta
          property="og:description"
          content="차량을 대여해주는 서비스입니다."
        />
        <meta property="og:site_name" content="차량 대여 서비스" />
        <meta property="og:locale" content="en_KO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
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
