import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { useMobileMenu } from '../utils/MobileMenuState';
import { QUERIES } from '../styles/constants';
import UnstyledButton from './UnstyledButton';
import Logo from './Logo';
import Button from './Button';
import VisuallyHidden from './VisuallyHidden';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';

export default function Header() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
    ssr: false,
  });

  return (
    <header>
      <HeaderStyles>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          {/* TODO: add active class + color when section scroll */}
          <NavLink href="/#about">
            <span data-hover="About">About</span>
          </NavLink>
          <NavLink href="/#projects">
            <span data-hover="Projects">Projects</span>
          </NavLink>
          <NavLink href="/#contact">
            <span data-hover="Contact">Contact</span>
          </NavLink>
        </Nav>
        <RightSection>
          <ThemeToggle />
          <a
            href="https://alexgwebdev.notion.site/Alexandre-Gros-e06bc5d76e604dadaee7559f07500b30"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              text="RESUME"
              color="var(--color-background)"
              background="var(--color-secondary)"
            />
          </a>
        </RightSection>
        <MobileActions>
          <ThemeToggle />
          <UnstyledButton
            className={
              isMobileMenuOpen
                ? 'hamburger hamburger--collapse is-active'
                : 'hamburger hamburger--collapse'
            }
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </HeaderStyles>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
}

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 32px;
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
  }
  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const LogoWrapper = styled.div`
  line-height: 0;
  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 4px 48px 0;
  padding-left: 140px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 32px;
  }
  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }

  /* hamburger animation css */
  .hamburger {
    padding: 10px 10px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    height: var(--min-tap-height);
    z-index: 10;
  }
  .hamburger:hover {
    opacity: 0.7;
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: var(--color-text);
  }

  .hamburger-box {
    width: 26px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 26px;
    height: 3px;
    background-color: var(--color-text);
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
