import styled from 'styled-components';
import { QUERIES } from '../styles/constants';
import SocialIcons from './SocialIcons';

export default function SideBar() {
  return (
    <SideBarWrapper>
      <SocialIcons direction="column" />
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  z-index: 2;
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: -100px;
  height: fit-content;
  width: fit-content;
  padding: 10px 20px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;
