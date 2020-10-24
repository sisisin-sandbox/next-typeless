import { createModule } from 'typeless';
import { SessionSymbol } from './symbol';

// --- Actions ---
export const [handle, SessionActions, getSessionState] = createModule(SessionSymbol)
  .withActions({
    $mounted: null,
    sessionInitialized: null,
    gotUser: (user: User) => ({ payload: { user } }),
    loginSubmitted: (login: { id: string; pass: string }) => ({ payload: { login } }),
    logoutSubmitted: null,
    logoutSucceeded: null,
  })
  .withState<SessionState>();
type User = { name: string };
// --- Types ---
export interface SessionState {
  user: User | null;
  isSessionInitialized: boolean;
}
