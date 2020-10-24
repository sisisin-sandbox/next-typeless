import Head from 'next/head';
import Link from 'next/link';
import { useActions } from 'typeless';
import { PrivateRoute } from '../components/private-route';
import { SessionActions } from '../features/session/interface';

export default function Home() {
  const { logoutSubmitted } = useActions(SessionActions);
  return (
    <PrivateRoute>
      <div className="container">
        <Head>
          <title>Create Next App</title>
        </Head>
        <main>
          <div>
            <Link href="/counter">
              <a>counter</a>
            </Link>
          </div>
          <div>
            <button onClick={logoutSubmitted}>logout</button>
          </div>
        </main>
      </div>
    </PrivateRoute>
  );
}
