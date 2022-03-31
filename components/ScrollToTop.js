import styled, { css } from 'styled-components';
import { ArrowUpCircle } from 'react-feather';
import { useState, useEffect } from 'react';
import VisuallyHidden from './VisuallyHidden';
import { QUERIES } from '../styles/constants';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleScroll = () => {
    const rootElement = document.documentElement;
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.8) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollTopStyled isVisible={showTopBtn}>
      <>
        <ArrowUpCircle
          className="icon-position icon-style"
          strokeWidth={1.5}
          onClick={goToTop}
        />
        <VisuallyHidden>Go To Top</VisuallyHidden>
      </>
    </ScrollTopStyled>
  );
};

const ScrollTopStyled = styled.div`
  position: relative;

  .icon-position {
    position: fixed;
    bottom: 40px;
    right: 0;
    margin-right: 20px;
    z-index: 20;
    @media ${QUERIES.phoneAndDown} {
      margin-right: 5px;
      bottom: 10px;
    }
  }
  .icon-style {
    background: transparent;
    border-radius: 50%;
    color: var(--color-text);
    opacity: 0.8;
    width: var(--min-tap-height);
    height: var(--min-tap-height);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease;
    ${(props) =>
      props.isVisible &&
      css`
        opacity: 1;
        transform: translateY(0);
      `};
    @media ${QUERIES.phoneAndDown} {
      right: 5px;
    }
  }
  .icon-style:hover {
    color: var(--color-primary);
  }
`;

export default ScrollToTop;
