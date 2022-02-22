import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  render() {
    const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
                  ? 'dark'
                  : 'light'
      }
      document.body.dataset.theme = getUserPreference();
    `;

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0E141B" />
          <meta
            name="description"
            content="Front End Web Developer with 4 years of experienced in the industry, I can help you craft a secure, fast, intuitive and responsive website adapted to your project needs and budget."
          />
          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemProp="name" content="Alex G | Web Developer" />
          <meta
            itemProp="description"
            content="Front End Web Developer with 4 years of experienced in the industry, I can help you craft a secure, fast, intuitive and responsive website adapted to your project needs and budget."
          />
          <meta
            itemProp="image"
            content="https://www.alexgwebdev.com/images/meta_image.png"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:title" content="Alex G | Web Developer" />
          <meta
            property="og:description"
            content="Front End Web Developer with 4 years of experienced in the industry, I can help you craft a secure, fast, intuitive and responsive website adapted to your project needs and budget."
          />
          <meta
            property="og:image"
            content="https://www.alexgwebdev.com/images/meta_image.png"
          />
          <meta property="og:url" content="https://www.alexgwebdev.com" />
          <meta property="og:type" content="website" />
          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:title" content="Alex G | Web Developer" />
          <meta name="twitter:site" content="@GhostXela" />
          <meta
            name="twitter:description"
            content="Front End Web Developer with 4 years of experienced in the industry, I can help you craft a secure, fast, intuitive and responsive website adapted to your project needs and budget."
          />
          <meta
            name="twitter:image"
            content="https://www.alexgwebdev.com/images/meta_image.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* used to avoid dreaded color flash */}
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
