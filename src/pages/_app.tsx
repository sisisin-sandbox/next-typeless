import { AppProps } from 'next/app';
import React from 'react';
import { DefaultTypelessProvider } from 'typeless';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DefaultTypelessProvider>
      <Component {...pageProps}></Component>
    </DefaultTypelessProvider>
  );
};

export default App;
