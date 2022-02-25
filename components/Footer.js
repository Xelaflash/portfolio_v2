import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { QUERIES } from '../styles/constants';
import VisuallyHidden from './VisuallyHidden';

import logo from '../public/logo.png';
import buyMeCoffeeImg from '../public/bmc-button.png';

export default function Footer() {
  return (
    <FooterWrapper>
      <FlexWrapperLeft>
        <LogoWrapper>
          <Image
            src={logo}
            alt="AlexG WebDev"
            width={80}
            height={80}
            quality={100}
            placeholder="blur"
          />
        </LogoWrapper>
        <Copyright>
          ©{new Date().getFullYear()} AlexGWebDev. All Rights Reserved.
        </Copyright>
      </FlexWrapperLeft>

      <LinksWrapper>
        <p>Sections</p>
        <Link href="/">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </LinksWrapper>

      <FlexWrapperRight>
        <BuyCoffeeBtnWrapper>
          <a
            href="https://www.buymeacoffee.com/givemethe.money"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={buyMeCoffeeImg}
              alt="Buy me a coffee - link to donate"
              quality={75}
              width={200}
              height={56}
              placeholder="blur"
            />
            <VisuallyHidden>Support Me</VisuallyHidden>
          </a>
        </BuyCoffeeBtnWrapper>
        <RegulatoryLinksWrapper>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/legal">Legal</Link>
        </RegulatoryLinksWrapper>
      </FlexWrapperRight>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: var(--footer-background) repeat scroll 0% 0%;
  min-height: 250px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr minmax(350px, 1fr) 1fr;
  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: repeat(3, 1fr);
    padding: 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 32px;
    padding: 32px 16px;
  }
`;

// grid elements
const FlexWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  justify-self: left;
  gap: 32px;
  @media ${QUERIES.phoneAndDown} {
    justify-self: center;
    gap: 16px;
    grid-row: 3;
  }
`;

const LinksWrapper = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: start;

  p {
    font-size: 18px;
    font-weight: var(--medium);
    color: var(--text-dimmed);
    text-transform: uppercase;
  }
  a {
    font-size: 18px;
    font-weight: var(--regular);
    color: var(--color-text);
    text-decoration: none;
    &:hover {
      color: var(--color-primary);
    }
  }
  @media ${QUERIES.phoneAndDown} {
    align-items: center;
  }
`;

const FlexWrapperRight = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 32px;
  justify-self: center;
  @media ${QUERIES.phoneAndDown} {
    gap: 24px;
    justify-self: center;
  }
`;
// End grid elements

const LogoWrapper = styled.div`
  line-height: 0;
  @media ${QUERIES.phoneAndDown} {
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  font-weight: var(--medium);
  margin-top: 8px;
  color: var(--text-dimmed);
  @media ${QUERIES.tabletAndDown} {
    text-align: center;
  }
`;

const BuyCoffeeBtnWrapper = styled.div`
  filter: drop-shadow(2px 2px 2px hsla(var(--footer-btn-shadow), 1));
`;

const RegulatoryLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-dimmed);
  a:hover {
    opacity: 0.8;
  }
  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`;
