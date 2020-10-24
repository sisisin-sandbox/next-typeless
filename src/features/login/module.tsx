import React from 'react';
import { LoginView } from './components/login-view';
import { LoginActions, LoginState, handle } from './interface';

// --- Epic ---
export const epic = handle.epic();

// --- Reducer ---
const initialState: LoginState = {
  foo: 'bar',
};

export const reducer = handle.reducer(initialState);

// --- Module ---
const useLoginModule = handle;
export const LoginModule = () => {
  useLoginModule();
  return <LoginView />;
};
