import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NavLink = ({ children, ...delegated }) => (
  <Wrapper {...delegated}>
    <MainText>{children}</MainText>
    <HoverText>{children}</HoverText>
  </Wrapper>
);

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  display: block;
  color: var(--color-text);
  font-weight: var(--semiBold);
  overflow: hidden;
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;
const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: var(--bold);
  color: var(--color-primary);
`;

NavLink.propTypes = {
  children: propTypes.any,
};

export default NavLink;
