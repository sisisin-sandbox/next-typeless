import dynamic from 'next/dynamic';

const loader = () => import('../features/counter/module').then(({ CounterModule }) => CounterModule);
const CounterPage = dynamic(loader, { ssr: false });
export default CounterPage;
