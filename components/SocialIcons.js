import propTypes from 'prop-types';
import styled from 'styled-components';
import { Facebook, GitHub, Linkedin, Twitter } from 'react-feather';
import VisuallyHidden from './VisuallyHidden';

export default function SocialIcons({ direction }) {
  return (
    <IconsWrapper direction={direction}>
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
    </IconsWrapper>
  );
}

SocialIcons.propTypes = {
  direction: propTypes.string,
};

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: 16px;
  color: var(--color-white);
  a {
    width: var(--min-tap-height);
    height: var(--min-tap-height);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: var(--color-primary);
    }
  }
`;
