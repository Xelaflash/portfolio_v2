import styled from 'styled-components';
import { QUERIES } from '../styles/constants';

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 64px * 2));
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.tabletAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default MaxWidthWrapper;
