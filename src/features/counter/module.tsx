import { CounterView } from './components/counter-view';
import { CounterActions, handle } from './interface';

const reducer = handle
  .reducer({ counter: 0 })
  .on(CounterActions.increment, (state) => {
    state.counter++;
    state.counter++;
  })
  .on(CounterActions.decrement, (state) => {
    state.counter--;
  });

const useCounterModule = handle;
export const CounterModule: React.FC = () => {
  useCounterModule();
  return <CounterView></CounterView>;
};
