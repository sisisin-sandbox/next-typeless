import { SessionActions, SessionState, handle } from './interface';

// --- Epic ---
export const epic = handle
  .epic()
  .on(SessionActions.$mounted, () => {
    const user = localStorage.getItem('session');
    if (user) {
      return [SessionActions.sessionInitialized(), SessionActions.gotUser(JSON.parse(user))];
    } else {
      return SessionActions.sessionInitialized();
    }
  })
  .on(SessionActions.loginSubmitted, ({ login: { id, pass } }) => {
    if (id === 'foo' && pass === 'bar') {
      const user = { name: 'foo bar' };
      localStorage.setItem('session', JSON.stringify(user));
      return SessionActions.gotUser(user);
    }
    return null;
  })
  .on(SessionActions.logoutSubmitted, () => {
    localStorage.removeItem('session');

    return SessionActions.logoutSucceeded();
  });

// --- Reducer ---
const initialState: SessionState = {
  user: null,
  isSessionInitialized: false,
};

export const reducer = handle
  .reducer(initialState)
  .on(SessionActions.sessionInitialized, (state) => {
    state.isSessionInitialized = true;
  })
  .on(SessionActions.gotUser, (state, { user }) => {
    state.user = user;
  })
  .on(SessionActions.logoutSucceeded, (state) => {
    state.user = null;
  });

// --- Module ---
export const useSessionModule = handle;
