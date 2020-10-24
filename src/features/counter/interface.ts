import { createModule } from 'typeless';
import { CounterSymbol } from './symbol';

export const [handle, CounterActions, getCounterState] = createModule(CounterSymbol)
  .withActions({
    increment: null,
    decrement: null,
  })
  .withState<{ counter: number }>();
