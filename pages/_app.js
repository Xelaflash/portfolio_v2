import Head from 'next/head';
import PropTypes from 'prop-types';
import { MobileMenuStateProvider } from '../utils/MobileMenuState';
// styles
import GlobalStyle from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <MobileMenuStateProvider>
        <Component {...pageProps} />
      </MobileMenuStateProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
