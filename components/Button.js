import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ text, background, color, className, type, disabled }) => (
  <ButtonStyles
    style={{ color: `${color}`, background: `${background}` }}
    className={className}
    type={type}
    disabled={disabled}
  >
    {text}
  </ButtonStyles>
);

const ButtonStyles = styled.button`
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
`;

Button.propTypes = {
  text: propTypes.string,
  background: propTypes.string,
  color: propTypes.string,
  type: propTypes.string,
  disabled: propTypes.bool,
  className: propTypes.string,
};

export default Button;
