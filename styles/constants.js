export const COLORS = {
  white: 'hsl(0, 0%, 100%)',
  gray: {
    100: 'hsl(185deg, 5%, 95%)',
    300: 'hsl(190deg, 5%, 80%)',
    500: 'hsl(196deg, 4%, 60%)',
    700: 'hsl(220deg, 5%, 40%)',
    900: 'hsl(220deg, 3%, 20%)',
  },

  // Dark mode colors
  darkPrimaryViolet: 'hsl(274, 100%, 75%)', // #C77DFF
  darkSecondaryBlue: 'hsl(185, 100%, 50%)', // #00E9FF
  darkBackgroundBlue: 'hsl(212, 32%,8%)', // #0E141B
  darkBackgroundBlueShade2: 'hsl(212, 32%,14%)', // #18232F
  darkBackgroundBlueShade3: 'hsl(212, 32%,20%)', // #233243

  // Light mode colors
  lightPrimaryVioline: 'hsl(315, 68%, 41%)', // #B0228C
  lightSecondaryBlue: 'hsl(228, 78%, 52%)', // #264DE4
  lightBackgroundShade2: 'hsl(180, 4%, 95%)', // #F2F3F3
  lightBackgroundShade3: 'hsl(190, 6%, 80%) ', // #C9CECF

  // shared colors
  green: 'hsl(177, 40%, 45%)', // #45A29E
  peach: 'hsl(0, 90%, 70%)', // #F76C6C

  // Logo colors
  // logoBlue: "hsl(197, 100%, 43%)", // #009DDB
  // logoViolet: "hsl(299, 42%, 42%)", // #963D97
  // logoRed: "hsl(359, 72%, 55%)", // #DF3A3E
  // logoOrange: "hsl(28, 91%, 54%)", // #F5831E
  // logoYellow: "hsl(41, 98%, 57%)", // #FDB827
  // logoGreen: "hsl(106, 46%, 50%)", // #61BB46
};

export const WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 700,
  bold: 900,
};

export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};
