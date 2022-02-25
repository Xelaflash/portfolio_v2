import { PropTypes } from 'prop-types';
import { useState, useContext, createContext, useEffect } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function ThemeStateProvider({ children }) {
  // This is our own custom provider. It will store data (state) and functionality (updaters).
  // It can be accessed from other levels via the consumer.
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  function toggleTheme() {
    setActiveTheme(inactiveTheme);
  }

  return (
    <LocalStateProvider
      // any value will be available everywhere in the app
      value={{
        activeTheme,
        setActiveTheme,
        inactiveTheme,
        toggleTheme,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

ThemeStateProvider.propTypes = {
  children: PropTypes.any,
};

//  we need a custom hook to access the cart local state from the  ThemeStateProvider
function useColorTheme() {
  //  We use a CONSUMER to access local state (ie a provider needs a consumer to access data (local state)
  const all = useContext(LocalStateContext);
  return all;
}

export { ThemeStateProvider, useColorTheme };
