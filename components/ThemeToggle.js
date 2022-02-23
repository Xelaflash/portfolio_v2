import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'react-feather';
import UnstyledButton from './UnstyledButton';
import { QUERIES } from '../styles/constants';

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <ColorTheme>
      <UnstyledButton
        type="button"
        aria-label={`Change to ${inactiveTheme} mode`}
        title={`Change to ${inactiveTheme} mode`}
        onClick={() => setActiveTheme(inactiveTheme)}
      >
        {activeTheme === 'dark' ? (
          <Sun
            size={28}
            className="color-scheme-icon"
            color="var(--color-text)"
          />
        ) : (
          <Moon
            size={28}
            className="color-scheme-icon"
            color="var(--color-text)"
          />
        )}
      </UnstyledButton>
    </ColorTheme>
  );
};

const ColorTheme = styled.div`
  .color-scheme-icon:hover {
    opacity: 0.8;
  }
  @media ${QUERIES.tabletAndDown} {
    margin-top: -4px;
  }
`;

export default ThemeToggle;
