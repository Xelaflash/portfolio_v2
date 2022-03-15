import styled from 'styled-components';
import propTypes from 'prop-types';

const BorderWrapper = ({ children }) => (
  <BorderWrapperStyles>{children}</BorderWrapperStyles>
);

const BorderWrapperStyles = styled.div`
  background: var(--color-background);
  padding: 0 1rem 0.5rem;
  border-radius: 5px;
  height: 99%;
`;

BorderWrapper.propTypes = {
  children: propTypes.any.isRequired,
};

export default BorderWrapper;
