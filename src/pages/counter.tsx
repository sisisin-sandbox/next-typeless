import dynamic from 'next/dynamic';
import { PrivateRoute } from '../components/private-route';

const loader = () => import('../features/counter/module').then(({ CounterModule }) => CounterModule);
const CounterModuleComponent = dynamic(loader, { ssr: false });

const Counter: React.FC = () => {
  return (
    <PrivateRoute>
      <CounterModuleComponent></CounterModuleComponent>
    </PrivateRoute>
  );
};
export default Counter;
