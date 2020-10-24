import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { getSessionState } from '../features/session/interface';

const loader = () => import('../features/login/module').then(({ LoginModule }) => LoginModule);
const LoginModuleComponent = dynamic(loader, { ssr: false });

const Login: React.FC = () => {
  const router = useRouter();
  const { user } = getSessionState.useState();
  const isLoggedIn = user !== null;
  React.useEffect(() => {
    if (isLoggedIn) router.push('/');
  }, [isLoggedIn]);
  if (isLoggedIn) {
    return null;
  } else {
    return <LoginModuleComponent></LoginModuleComponent>;
  }
};

export default Login;
