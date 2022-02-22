/* eslint-disable no-unused-vars */
import propTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { Facebook, GitHub, Linkedin, Twitter } from 'react-feather';
import Link from 'next/link';
import Button from './Button';
import VisuallyHidden from './VisuallyHidden';
import Spacer from './Spacer';
import useLockBodyScroll from '../utils/bodyScrollLock';

const MobileMenu = ({ isOpen }) => {
  useLockBodyScroll();
  return (
    <MobileMenuStyles isOpen={isOpen}>
      <ContentWrapper aria-label="Menu">
        <Content>
          <Filler />
          <Nav>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Nav>
          <Spacer size={96} />
          <ButtonWrapper>
            <a
              href="https://alexgwebdev.notion.site/Alexandre-Gros-e06bc5d76e604dadaee7559f07500b30"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MobileResumeButton
                text="RESUME"
                color="var(--color-background)"
                background="var(--color-secondary)"
              />
            </a>
          </ButtonWrapper>
          <SocialWrapper>
            <a
              href="https://www.facebook.com/alexgwebdev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook size={24} className="social-icons" />
              <VisuallyHidden>Facebook</VisuallyHidden>
            </a>
            <a
              href="https://github.com/Xelaflash"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHub size={24} className="social-icons" />
              <VisuallyHidden>Github</VisuallyHidden>
            </a>
            <a
              href="https://www.linkedin.com/in/alexgwebdev/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin size={24} className="social-icons" />
              <VisuallyHidden>Linkedin</VisuallyHidden>
            </a>
            <a
              href="https://twitter.com/GhostXela"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Twitter size={24} className="social-icons" />
              <VisuallyHidden>Linkedin</VisuallyHidden>
            </a>
          </SocialWrapper>
          <Footer>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/legal">Legal</Link>
          </Footer>
        </Content>
      </ContentWrapper>
    </MobileMenuStyles>
  );
};

const backdropFadeIn = keyframes`
  0% {
    background: hsl(212deg 8% 38% / 0.0);
  }
  100% {
    background: hsl(212deg 8% 38% / 0.9);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ContentWrapper = styled.div`
  background: var(--color-background);
  width: 300px;
  padding: 32px;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  color: var(--color-text);
  font-weight: var(--medium);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.125rem;
  transition: color 350ms;
  width: max-content;
  &:hover {
    color: var(--color-primary);
  }
`;

const ButtonWrapper = styled.div`
  margin: auto;
`;

const MobileResumeButton = styled(Button)`
  padding: 12px 40px;
`;

const SocialWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  /*  TODO: check if 44px on mobile */
  a {
    width: var(--min-tap-height);
    height: var(--min-tap-height);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--color-text);
  opacity: 0.8;
  a:hover {
    opacity: 0.6;
  }
`;

const MobileMenuStyles = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: flex-end;
  /* background: hsl(212deg 8% 38% / 0.9); */
  transform: translateX(100%);
  transition: all 0.3s;
  transform: translateX(100%);
  ${(props) =>
    props.isOpen &&
    css`
      width: 100%;
      animation: 450ms ${backdropFadeIn} both ease-out 200ms;
      transform: translateX(0);
      /* box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.45); */
    `};
  ${Content} {
    ${(props) =>
      props.isOpen &&
      css`
        animation: ${fadeIn} ease-in 300ms backwards 250ms;
      `};
  }
`;

MobileMenu.propTypes = {
  isOpen: propTypes.bool,
};

export default MobileMenu;
