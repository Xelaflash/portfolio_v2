import styled from 'styled-components';
import propTypes from 'prop-types';

export default function SectionTitle({ title, margin }) {
  return (
    <TitleWrapper margin={margin}>
      <h2 className="section-title">{title}</h2>
      <div className="under" />
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  /*  TO define at component level? */
  margin: ${(props) => props.margin};
  width: fit-content;
  h2 {
    margin: 8px auto;
    width: fit-content;
    text-align: center;
    font-weight: var(--semiBold);
    border: none;
  }
  .under {
    background: var(--color-primary);
    height: 8px;
    width: 40%;
    border-radius: 13px;
    border: none;
    text-align: center;
    margin: auto;
  }
`;

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
};
