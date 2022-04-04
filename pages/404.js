import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import {
  PageWrapper,
  PageContentWrapper,
  TitleWrapper,
  LogoWrapper,
  ImageWrapper,
  LinkWrapper,
  LinkToHome,
} from '../styles/error';
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
