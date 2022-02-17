import Head from 'next/head';
// import Image from 'next/image';
import Home from '../components/Home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Alex G | Web Developer</title>
        <meta
          property="og:title"
          content="Alex G | Web Developer"
          key="title"
        />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
