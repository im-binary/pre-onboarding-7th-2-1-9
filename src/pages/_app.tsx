import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>차량대여 서비스</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
