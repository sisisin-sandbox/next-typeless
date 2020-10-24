import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
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
      </main>
    </div>
  );
}
