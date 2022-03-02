import styled from 'styled-components';
import { QUERIES } from '../styles/constants';

export default function TriangleSeparator() {
  return (
    <TriangleSeparatorWrapper>
      {/* <TriangleSeparatorWrapperTop />
      <TriangleSeparatorWrapperBottom /> */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 301"
        version="1.1"
        preserveAspectRatio="xMidYMax slice"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Desktop-HD"
            transform="translate(0.000000, -188.000000)"
            fill="var(--color-background-shade3)"
            stroke="var(--color-background-shade3)"
          >
            <polygon
              id="Triangle"
              transform="translate(720.500000, 338.500000) rotate(90.000000) translate(-720.500000, -338.500000) "
              points="720.5 -381.5 870.5 1058.5 570.5 1058.5"
            />
          </g>
        </g>
      </svg>
    </TriangleSeparatorWrapper>
  );
}

const TriangleSeparatorWrapper = styled.div`
  margin-top: -5rem;
  @media ${QUERIES.phoneAndDown} {
    margin-top: -3rem;
  }
`;
