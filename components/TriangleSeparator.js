import styled from 'styled-components';

export default function TriangleSeparator() {
  return (
    <>
      <TriangleSeparatorWrapperTop />
      <TriangleSeparatorWrapperBottom />
    </>
  );
}

const TriangleSeparatorWrapperTop = styled.div`
  margin-top: -5rem;
  width: 100%;
  min-height: 10rem;
  background: linear-gradient(
    calc(-160deg - 14deg),
    transparent 0%,
    transparent 49.99%,
    var(--color-background-shade3) 50%,
    var(--color-background-shade3) 100%
  );
`;
const TriangleSeparatorWrapperBottom = styled.div`
  width: 100%;
  min-height: 10rem;
  background: linear-gradient(
    calc(160deg + 14deg),
    var(--color-background-shade3) 0,
    var(--color-background-shade3) 49.99%,
    transparent 50%,
    transparent 100%
  );
`;
