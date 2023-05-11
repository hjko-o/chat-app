import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../public/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>카카오스타일 채팅</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
