import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHTS } from './constants';

import '@fontsource/cabin/variable.css';
import '@fontsource/cabin/variable-italic.css';
import '@fontsource/raleway/variable.css';
import '@fontsource/raleway/variable-italic.css';

// fallback for non browser not supporting variable fonts
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/500.css';
import '@fontsource/cabin/700.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/900.css';

const GlobalStyle = createGlobalStyle`
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }

  /*
  Remove default button styles. We'll provide our own at the
  component level
*/
  button {
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  /* END RESET */

  :root {
    --font-family: "CabinVariable", sans-serif;
    --title-font-family: "RalewayVariable", sans-serif;
    --light: ${WEIGHTS.light};
    --regular: ${WEIGHTS.regular};
    --medium: ${WEIGHTS.medium};
    --bold: ${WEIGHTS.bold};
    --color-white: ${COLORS.white};
    --color-green: ${COLORS.green};
    --color-peach: ${COLORS.peach};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};
    --color-logo-yellow: ${COLORS.logoYellow};
    /* --color-logo-blue: ${COLORS.logoBlue};
    --color-logo-Violet: ${COLORS.logoViolet};
    --color-logo-red: ${COLORS.logoRed};
    --color-logo-orange: ${COLORS.logoOrange};
    --color-logo-green: ${COLORS.logoGreen}; */

    /* dark Mode variables */
    body[data-theme="dark"] {
      --color-primary: ${COLORS.darkPrimaryViolet};
      --color-secondary: ${COLORS.darkSecondaryBlue};
      --color-background: ${COLORS.darkBackgroundBlue};
      --color-background-shade2: ${COLORS.darkBackgroundBlueShade2};
      --color-background-shade3: ${COLORS.darkBackgroundBlueShade3};
      --color-text: var(--color-white);
      --color-gradient: linear-gradient(
        90deg,
        hsl(185deg 100% 50%) 0%,
        hsl(196deg 100% 70%) 23%,
        hsl(211deg 100% 77%) 33%,
        hsl(234deg 100% 82%) 44%,
        hsl(259deg 100% 80%) 58%,
        hsl(274deg 100% 75%) 99%
      );
      --footer-background: linear-gradient(
        180deg,
        hsl(212deg 32% 8%) 0%,
        hsl(212deg 30% 9%) 28%,
        hsl(212deg 31% 10%) 39%,
        hsl(212deg 31% 12%) 47%,
        hsl(212deg 32% 13%) 53%,
        hsl(211deg 32% 14%) 58%,
        hsl(211deg 32% 15%) 64%,
        hsl(212deg 32% 16%) 69%,
        hsl(212deg 32% 18%) 75%,
        hsl(212deg 32% 19%) 82%,
        hsl(212deg 31% 20%) 100%
      );
      --footer-btn-shadow: 0deg, 0%, 100%;
      --footer-text-dimmed: var(--color-gray-500);
      color: var(--color-white);
      background: var(--color-background);
    }


    /* Light Mode variables */
    body[data-theme="light"] {
      --color-primary: ${COLORS.lightPrimaryVioline};
      --color-secondary: ${COLORS.lightSecondaryBlue};
      --color-background: ${COLORS.white};
      --color-background-shade2: ${COLORS.lightBackgroundShade2};
      --color-background-shade3: ${COLORS.lightBackgroundShade3};
      --color-text: var(--color-gray-900);
      --color-gradient: linear-gradient(
        90deg,
        hsl(228deg 78% 52%) 0%,
        hsl(246deg 63% 56%) 29%,
        hsl(263deg 54% 51%) 44%,
        hsl(280deg 53% 46%) 57%,
        hsl(298deg 56% 41%) 72%,
        hsl(315deg 68% 41%) 100%
      );
      --footer-background: linear-gradient(
        180deg,
        hsl(0deg 0% 100%) 0%,
        hsl(180deg 4% 99%) 17%,
        hsl(180deg 4% 98%) 24%,
        hsl(180deg 4% 97%) 30%,
        hsl(180deg 4% 96%) 35%,
        hsl(180deg 4% 95%) 40%,
        hsl(182deg 5% 92%) 46%,
        hsl(184deg 5% 89%) 52%,
        hsl(186deg 5% 86%) 61%,
        hsl(188deg 6% 83%) 72%,
        hsl(190deg 6% 80%) 100%
      );
      --footer-btn-shadow: 220deg, 3%, 20%;
      --footer-text-dimmed: var(--color-gray-700);
      color: var(--color-text);
      background: var(--color-background);
    }
  }

  html {
    scroll-behavior: smooth;
    --min-tap-height: 32px;
      /* upsizing the default tap area for mobile device */
    @media (pointer: coarse) {
      --min-tap-height: 44px;
    }
  }

  body {
    font-family: var(--font-family); // weights axis 400 - 700
    font-weight: var(--regular);
  }


  h1,h2,h3,h4 {
    font-family: var(--title-font-family); // weights axis 100 - 900
    font-weight: var(--bold);
  }

  .section-title {
    font-size: 3rem;
    color: var(--color-gradient);
    background: var(--color-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default GlobalStyle;
