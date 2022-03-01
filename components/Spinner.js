import styled, { keyframes } from 'styled-components';
import VisuallyHidden from './VisuallyHidden';

const Spinner = () => (
  <SpinnerWrapper>
    <Loader>
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
    </Loader>
    <VisuallyHidden>Loading...</VisuallyHidden>
  </SpinnerWrapper>
);

const SpinnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const skChase = keyframes`
  100% { transform: rotate(360deg)};
`;

const skChaseDot = keyframes`
  80%, 100% { transform: rotate(360deg)};
`;

const skChaseDotBefore = keyframes`
  50% {
    transform: scale(0.4);
  } 100%, 0% {
    transform: scale(1.0);
  }
`;

const Loader = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  animation: ${skChase} 2.5s infinite linear both;
`;

const Dots = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${skChaseDot} 2s infinite ease-in-out both;
  &:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background: var(--color-gradient);
    border-radius: 100%;
    animation: ${skChaseDotBefore} 2s infinite ease-in-out both;
  }

  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }
  &:nth-child(1):before {
    animation-delay: -1.1s;
  }
  &:nth-child(2):before {
    animation-delay: -1s;
  }
  &:nth-child(3):before {
    animation-delay: -0.9s;
  }
  &:nth-child(4):before {
    animation-delay: -0.8s;
  }
  &:nth-child(5):before {
    animation-delay: -0.7s;
  }
  &:nth-child(6):before {
    animation-delay: -0.6s;
  }
`;

export default Spinner;
