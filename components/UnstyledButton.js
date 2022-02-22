import styled from 'styled-components';

export default styled.button`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  min-height: var(--min-tap-height);
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
