import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHTS } from './constants';

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
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};
    --color-logo-blue: ${COLORS.logoBlue};
    --color-logo-Violet: ${COLORS.logoViolet};
    --color-logo-red: ${COLORS.logoRed};
    --color-logo-orange: ${COLORS.logoOrange};
    --color-logo-yellow: ${COLORS.logoYellow};
    --color-logo-green: ${COLORS.logoGreen};

    /* Dark Mode variables */
    @media (prefers-color-scheme: dark) {
      --color-primary: ${COLORS.darkPrimaryViolet};
      --color-secondary: ${COLORS.darkSecondaryBlue};
      --color-tertiary: ${COLORS.darkTertiaryYellow};
      --color-background: ${COLORS.darkBackgroundBlue};
      --color-background-shade2: ${COLORS.darkBackgroundBlueShade2};
      --color-background-shade3: ${COLORS.darkBackgroundBlueShade3};
      body {
        color: var(--color-white);
        background: var(--color-background);
      }
    }

    /* Light Mode variables */
    @media (prefers-color-scheme: light) {
      --color-primary: ${COLORS.lightPrimaryGreen};
      --color-secondary: ${COLORS.lightSecondaryVioline};
      --color-tertiary: ${COLORS.lightTertiaryLightBlue};
      --color-background: ${COLORS.white};
      --color-background-shade2: ${COLORS.lightBackgroundShade2};
      --color-background-shade3: ${COLORS.lightBackgroundShade3};
      --color-text: ${COLORS.darkBackgroundBlue};
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
    font-weight: ${WEIGHTS.normal};
  }
`;

export default GlobalStyle;
