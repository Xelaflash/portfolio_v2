import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  );
}
