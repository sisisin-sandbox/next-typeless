import { AppProps } from 'next/app';
import React from 'react';
import { DefaultTypelessProvider } from 'typeless';
import { getSessionState } from '../features/session/interface';
import { useSessionModule } from '../features/session/module';

const SessionInitializer: React.FC = ({ children }) => {
  useSessionModule();
  const { isSessionInitialized } = getSessionState.useState();
  if (isSessionInitialized) {
    return <>{children}</>;
  } else {
    return <div>loading...</div>;
  }
};
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DefaultTypelessProvider>
      <SessionInitializer>
        <Component {...pageProps}></Component>
      </SessionInitializer>
    </DefaultTypelessProvider>
  );
};

export default App;
