import styled from 'styled-components';

export default function TrianglesSeparator() {
  return (
    <TrianglesSeparatorWrapper>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1441 342"
        version="1.1"
        preserveAspectRatio="xMidYMax slice"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Desktop-HD"
            transform="translate(0.000000, -284.000000)"
            fill="var(--color-background-shade2)"
            stroke="var(--color-background-shade2)"
          >
            <g id="Group" transform="translate(0.500000, 285.500000)">
              <polygon
                id="Triangle"
                transform="translate(360.000000, 169.500000) rotate(90.000000) translate(-360.000000, -169.500000) "
                points="360 -190.5 529.5 529.496552 190.5 529.496552"
              />
              <polygon
                id="Triangle-Copy"
                transform="translate(1080.000000, 169.500000) scale(-1, 1) rotate(90.000000) translate(-1080.000000, -169.500000) "
                points="1080 -190.5 1249.5 529.5 910.5 529.5"
              />
            </g>
          </g>
        </g>
      </svg>
    </TrianglesSeparatorWrapper>
  );
}

const TrianglesSeparatorWrapper = styled.div`
  /* margin-top: -10rem; */
`;
