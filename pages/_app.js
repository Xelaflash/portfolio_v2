import Head from 'next/head';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { MobileMenuStateProvider } from '../utils/MobileMenuState';
// styles
import GlobalStyle from '../styles/GlobalStyles';

const ThemeStateProvider = dynamic(
  () => import('../utils/themeState').then((mod) => mod.ThemeStateProvider),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeStateProvider>
        <MobileMenuStateProvider>
          <Component {...pageProps} />
        </MobileMenuStateProvider>
      </ThemeStateProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
