import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { QUERIES } from '../styles/constants';
import { useWindowSize } from '../utils/useWindowSize';
import { useColorTheme } from '../utils/themeState';
import MaxWidthWrapper from './MaxWidthWrapper';
import Spacer from './Spacer';
import laptopDarkImg from '../public/laptop_dark.png';
import laptopLightImg from '../public/laptop_light.png';

export default function Home() {
  const size = useWindowSize();
  const { activeTheme } = useColorTheme();

  return (
    <Background>
      <Spacer size={72} />
      <MaxWidthWrapper>
        <h1 className="section-title">
          Crafting responsive and beautiful websites that suit your needs.
        </h1>
        <Link href="/#about">
          <a className="cta">Get Started</a>
        </Link>
        {size.width < 950 && size.width >= 600 ? (
          <Spacer size={116} />
        ) : (
          <Spacer size={100} />
        )}
        <TaglineWrapper>
          <p>
            Need a custom website? <br />
            Got a project?
          </p>
          <Link href="/#contact">Let's Talk</Link>
        </TaglineWrapper>
        <LaptopSvgWrapper>
          <ImageWrapper>
            {activeTheme === 'dark' ? (
              <Image
                src={laptopDarkImg}
                alt="Illustration of a laptop with a coffee cup"
                layout="fill"
              />
            ) : (
              <Image
                src={laptopLightImg}
                alt="Illustration of a laptop with a coffee cup"
                layout="fill"
              />
            )}
          </ImageWrapper>
        </LaptopSvgWrapper>
      </MaxWidthWrapper>
    </Background>
  );
}

const Background = styled.section`
  width: 100%;
  min-height: 41rem;
  background: linear-gradient(
      calc(180deg - 20deg),
      transparent 0%,
      transparent 59.99%,
      var(--color-background-shade3) 60%,
      var(--color-background-shade3) 100%
    ),
    linear-gradient(
      calc(180deg + 20deg),
      transparent 0%,
      transparent 59.99%,
      var(--color-background-shade2) 60%,
      var(--color-background-shade2) 100%
    );
  h1 {
    margin-top: -16px;
    padding-left: 64px;
    max-width: 610px;
    line-height: 1.1;
    margin-bottom: 32px;
    font-weight: 750;
  }
  .cta {
    margin-left: 15rem;
    color: #000000;
    background: var(--color-primary);
    padding: 12px 36px;
    font-weight: var(--regular);
    font-size: 1rem;
    font-family: var(--font-family);
    min-height: var(--min-tap-height);
    border-radius: 6000px;
    transition: opacity 300ms ease;
    &:hover {
      opacity: 0.8;
    }
  }
  @media ${QUERIES.tabletAndDown} {
    h1 {
      padding-left: 48px;
    }
    .cta {
      margin-left: 48px;
    }
  }
  @media ${QUERIES.phoneAndDown} {
    h1 {
      padding-left: 32px;
      max-width: 400px;
    }
    .cta {
      margin-left: 32px;
    }
  }
`;

const TaglineWrapper = styled.div`
  width: fit-content;
  padding-left: 64px;
  p {
    line-height: 1.2;
    color: var(--text-dimmed);
    font-weight: var(--medium);
    font-size: 1.2rem;
    margin-bottom: 25px;
  }
  a {
    font-size: 1.2rem;
    color: var(--color-text);
    font-weight: var(--bold);
    font-family: var(--title-font-family);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media ${QUERIES.tabletAndDown} {
    padding-left: 48px;
    p,
    a {
      font-size: 1rem;
    }
  }
  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`;

const LaptopSvgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageWrapper = styled.div`
  width: 425px;
  height: 280px;
  position: relative; //used for next image responsiveness
  line-height: 0;
  margin-top: -150px;
  margin-right: -40px;
  img {
    aspect-ratio: 4 / 3;
    object-fit: contain;
  }

  @media screen and (min-width: 951px) and (max-width: 1400px) {
    margin-right: 0;
  }

  @media ${QUERIES.tabletAndDown} {
    width: 375px;
    height: 230px;
    margin-top: -90px;
    margin-right: 0;
  }
  @media ${QUERIES.phoneAndDown} {
    width: 355px;
    height: 210px;
    margin-top: -10px;
  }
`;
