import Head from 'next/head';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { MobileMenuStateProvider } from '../utils/MobileMenuState';
import '../styles/nprogress.css';
// styles
import GlobalStyle from '../styles/GlobalStyles';
import Spinner from '../components/Spinner';

const ThemeStateProvider = dynamic(
  () => import('../utils/themeState').then((mod) => mod.ThemeStateProvider),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 500,
    showSpinner: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setIsLoading(true);
    };
    const handleStop = () => {
      NProgress.done();
      setIsLoading(false);
    };
    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);
    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      {isLoading ? (
        <Spinner />
      ) : (
        <ThemeStateProvider>
          <MobileMenuStateProvider>
            <Component {...pageProps} />
          </MobileMenuStateProvider>
        </ThemeStateProvider>
      )}
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
