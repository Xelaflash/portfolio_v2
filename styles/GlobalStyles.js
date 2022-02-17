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
    margin:0;
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
  /* upsizing the default tap area for mobile device */
  @media (pointer: coarse) {
    html {
      --min-tap-height: 44px;
    }
  }

  :root {
    --color-white: ${COLORS.white};
    --color-green: ${COLORS.green};
    --color-peach: ${COLORS.peach};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};
    /* --color-logo-blue: ${COLORS.logoBlue};
    --color-logo-Violet: ${COLORS.logoViolet};
    --color-logo-red: ${COLORS.logoRed};
    --color-logo-orange: ${COLORS.logoOrange};
    --color-logo-yellow: ${COLORS.logoYellow};
    --color-logo-green: ${COLORS.logoGreen}; */

    /* Dark Mode variables */
    @media (prefers-color-scheme: dark) {
      --color-primary: ${COLORS.darkPrimaryViolet};
      --color-secondary: ${COLORS.darkSecondaryBlue};
      --color-background: ${COLORS.darkBackgroundBlue};
      --color-background-shade2: ${COLORS.darkBackgroundBlueShade2};
      --color-background-shade3: ${COLORS.darkBackgroundBlueShade3};
      --color-gradient: linear-gradient(
        90deg,
        hsl(185deg 100% 50%) 0%,
        hsl(196deg 100% 70%) 23%,
        hsl(211deg 100% 77%) 33%,
        hsl(234deg 100% 82%) 44%,
        hsl(259deg 100% 80%) 58%,
        hsl(274deg 100% 75%) 99%
      );
      body {
        color: var(--color-white);
        background: var(--color-background);
      }
    }

    /* Light Mode variables */
    @media (prefers-color-scheme: light) {
      --color-primary: ${COLORS.lightPrimaryBlue};
      --color-secondary: ${COLORS.lightSecondaryVioline};
      --color-background: ${COLORS.white};
      --color-background-shade2: ${COLORS.lightBackgroundShade2};
      --color-background-shade3: ${COLORS.lightBackgroundShade3};
      --color-text: ${COLORS.gray[900]};
      --color-gradient: linear-gradient(
        90deg,
        hsl(228deg 78% 52%) 0%,
        hsl(246deg 63% 56%) 29%,
        hsl(263deg 54% 51%) 44%,
        hsl(280deg 53% 46%) 57%,
        hsl(298deg 56% 41%) 72%,
        hsl(315deg 68% 41%) 100%
      );
      body {
        color: var(--color-text);
        background: var(--color-background);
      }
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "CabinVariable", sans-serif; // weights axis 400 - 700
    font-weight: ${WEIGHTS.normal};
  }
  h1,h2,h3,h4 {
    font-family: "RalewayVariable", sans-serif; // weights axis 100 - 900
    font-weight: ${WEIGHTS.bold};
  }

`;

export default GlobalStyle;
