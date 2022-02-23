import styled, { keyframes } from 'styled-components';
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
          <Sun size={28} className="sun" />
        ) : (
          <Moon size={28} className="moon" />
        )}
      </UnstyledButton>
    </ColorTheme>
  );
};

const animate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ColorTheme = styled.div`
  color: var(--color-text);
  transition: all 500ms;
  &:hover {
    animation: ${animate} 750ms both ease-out;
    .sun {
      stroke: var(--color-logo-yellow);
      fill: var(--color-logo-yellow);
    }
    .moon {
      stroke: var(--color-text);
      fill: var(--color-text);
    }
  }

  @media ${QUERIES.tabletAndDown} {
    margin-top: -4px;
  }
`;

export default ThemeToggle;
