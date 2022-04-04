import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { QUERIES } from '../styles/constants';
import Logo from '../components/Logo';

export default function FourOhFour() {
  return (
    <FourOhFourWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <PageWrapper>
        <PageContentWrapper>
          <TitleWrapper>
            <h1 className="section-title">OOPS!</h1>
            <h2 className="section-title">404 - Page Not Found</h2>
          </TitleWrapper>
          <ImageWrapper>
            <Image
              src="/404.svg"
              alt="404 - Page Not Found"
              width={600}
              height={452}
            />
          </ImageWrapper>
          <LinkWrapper>
            <Link href="/" passHref>
              <LinkToHome>Go back home</LinkToHome>
            </Link>
          </LinkWrapper>
        </PageContentWrapper>
      </PageWrapper>
    </FourOhFourWrapper>
  );
}

const FourOhFourWrapper = styled.div`
  padding: 2rem;
  @media (orientation: portrait) {
    max-height: 100vh;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (orientation: portrait) {
    height: calc(100vh - 100px);
  }
  h1,
  h2 {
    margin: 0;
  }
`;
const PageContentWrapper = styled.div``;

const TitleWrapper = styled.div`
  width: fit-content;
  text-align: center;
  margin: -3.5rem auto 0;
  line-height: 1.2;
  @media ${QUERIES.tabletAndDown} {
    margin: 4rem auto;
  }
  @media ${QUERIES.phoneAndDown} {
    margin: 1rem auto;
  }
`;

const LogoWrapper = styled.div`
  line-height: 0;
`;

const ImageWrapper = styled.div`
  width: fit-content;
  margin: 1rem auto 2rem;
  @media ${QUERIES.tabletAndDown} {
    margin: 5rem auto;
  }
  @media ${QUERIES.phoneAndDown} {
    margin: 3rem auto;
  }
`;

const LinkWrapper = styled.div`
  margin: 1rem auto;
  width: fit-content;
`;

const LinkToHome = styled.a`
  margin: auto;
  padding: 12px 36px;
  font-weight: var(--regular);
  font-size: 1rem;
  font-family: var(--font-family);
  min-height: var(--min-tap-height);
  border-radius: 6000px;
  transition: opacity 300ms ease;
  color: var(--color-background);
  background: var(--color-secondary);
  &:hover {
    opacity: 0.8;
  }
`;
