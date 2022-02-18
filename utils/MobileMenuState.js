import { PropTypes } from 'prop-types';
import { useState, useContext, createContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MobileMenuStateProvider({ children }) {
  // This is our own custom provider. It will store data (state) and functionality (updaters).
  // It can be accessed from other levels via the consumer.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <LocalStateProvider
      // any value will be available everywhere in the app
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        toggleMobileMenu,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

MobileMenuStateProvider.propTypes = {
  children: PropTypes.any,
};

//  we need a custom hook to access the cart local state from the  CartStateProvider
function useMobileMenu() {
  //  We use a CONSUMER to access local state (ie a provider needs a consumer to access data (local state)
  const all = useContext(LocalStateContext);
  return all;
}

export { MobileMenuStateProvider, useMobileMenu };
