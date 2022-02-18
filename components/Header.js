import styled from 'styled-components';
import { Sun, Moon } from 'react-feather';
import { useMobileMenu } from '../utils/MobileMenuState';
import { QUERIES } from '../styles/constants';
import UnstyledButton from './UnstyledButton';
import Logo from './Logo';
import Button from './Button';
import VisuallyHidden from './VisuallyHidden';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

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
          {/* TODO: add stuff to change color scheme */}
          <UnstyledButton>
            <Sun size={24} className="color-scheme-icon" />
          </UnstyledButton>
        </RightSection>
        <MobileActions>
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
  /* border-bottom: 1px solid var(--color-gray-300); */
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
  margin: 0px 48px;
  padding-left: 92px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-white);
  font-weight: var(--normal);
  overflow: hidden;

  &:hover span {
    transform: translateY(-100%);
    color: var(--color-primary);
  }

  span {
    position: relative;
    display: inline-block;
    transition: transform 150ms ease-out, color 250ms ease-out;
  }

  span::before {
    position: absolute;
    top: 100%;
    content: attr(data-hover);
    transform: translate3d(0, 0, 0);
  }
`;

const RightSection = styled.div`
  display: flex;
  gap: 16px;
  .color-scheme-icon {
    color: var(--color-gray-300);
    &:hover {
      color: var(--color-white);
    }
  }
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
    height: calc(var(--min-tap-height) + 20px);
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
    background-color: var(--color-white);
  }

  .hamburger-box {
    width: 26px;
    height: var(--min-tap-height);
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
    background-color: var(--color-white);
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
