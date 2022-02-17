import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ text, background, color, className }) => (
  <ButtonStyles
    style={{ color: `${color}`, background: `${background}` }}
    className={className}
  >
    {text}
  </ButtonStyles>
);

const ButtonStyles = styled.button`
  padding: 12px 32px;
  font-weight: var(--bold);
  font-size: 1rem;
  font-family: var(--font-family);
  min-height: var(--min-tap-height);
  border-radius: 6000px;
  transition: opacity 300ms ease;
  &:hover {
    opacity: 0.8;
  }
`;

Button.propTypes = {
  text: propTypes.string,
  background: propTypes.string,
  color: propTypes.string,
  className: propTypes.string,
};

export default Button;
