import { useActions } from 'typeless';
import { CounterActions, getCounterState } from '../interface';
import Link from 'next/link';
import Head from 'next/head';

export const CounterView = () => {
  const { counter } = getCounterState.useState();
  const { increment, decrement } = useActions(CounterActions);

  return (
    <div>
      <Head>
        <title>simple counter</title>
      </Head>
      <div>{counter}</div>
      <button onClick={increment}>+</button>
      <br />
      <button onClick={decrement}>-aaa-</button>
      <footer>
        <Link href="/">
          <a>go to home</a>
        </Link>
      </footer>
    </div>
  );
};
