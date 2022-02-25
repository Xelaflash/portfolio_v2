import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import Image from 'next/image';
import Home from '../components/Home';
import About from '../components/About';
import SideBar from '../components/Sidebar';

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
      <Header />
      <SideBar />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
}
