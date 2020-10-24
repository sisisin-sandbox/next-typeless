import { useRouter } from 'next/router';
import React from 'react';
import { getSessionState } from '../features/session/interface';

export const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const { user } = getSessionState.useState();
  const isLoggedIn = user !== null;
  React.useEffect(() => {
    if (!isLoggedIn) router.push('/login');
  });

  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return null;
  }
};
