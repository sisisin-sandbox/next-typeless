import React from 'react';
import { useActions } from 'typeless';
import { SessionActions } from '../../session/interface';

export const LoginView = () => {
  const { loginSubmitted } = useActions(SessionActions);
  return (
    <div>
      <div>Feature login</div>
      <button
        onClick={() => {
          loginSubmitted({ id: 'foo', pass: 'bar' });
        }}
      >
        login
      </button>
    </div>
  );
};
