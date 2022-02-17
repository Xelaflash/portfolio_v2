import styled from 'styled-components';
import Button from './Button';
import MaxWidthWrapper from './MaxWidthWrapper';
import Spacer from './Spacer';

export default function Home() {
  return (
    <Background>
      <Spacer size={92} />
      <MaxWidthWrapper>
        <h1 className="section-title">
          Crafting responsive and beautiful websites that suit your needs.
        </h1>
        <Button
          text="Get Started"
          color="var(--color-white)"
          background="var(--color-primary)"
          className="cta"
        >
          Get Started
        </Button>
      </MaxWidthWrapper>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
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
    padding-left: 64px;
    max-width: 606px;
    line-height: 1.1;
    margin-bottom: 32px;
  }
  .cta {
    margin-left: 15rem;
  }
`;
