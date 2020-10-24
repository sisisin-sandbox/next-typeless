import { createModule } from 'typeless';
import { LoginSymbol } from './symbol';

// --- Actions ---
export const [handle, LoginActions, getLoginState] = createModule(LoginSymbol)
  .withActions({})
  .withState<LoginState>();

// --- Types ---
export interface LoginState {
  foo: string;
}
