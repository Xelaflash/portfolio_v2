import styled from 'styled-components';
import { ArrowUpCircle } from 'react-feather';
import { useState, useEffect } from 'react';
import VisuallyHidden from './VisuallyHidden';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollTopStyled>
      {showTopBtn && (
        <>
          <ArrowUpCircle
            className="icon-position icon-style"
            strokeWidth={1.5}
            onClick={goToTop}
          />
          <VisuallyHidden>Go To Top</VisuallyHidden>
        </>
      )}
    </ScrollTopStyled>
  );
};

const ScrollTopStyled = styled.div`
  position: relative;

  .icon-position {
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
  }
  .icon-style {
    background: transparent;
    border-radius: 50%;
    color: var(--color-text);
    width: 44px;
    height: 44px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .icon-style:hover {
    color: var(--color-primary);
  }
`;

export default ScrollToTop;
