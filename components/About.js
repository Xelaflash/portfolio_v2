import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import propTypes from 'prop-types';
import { Fragment } from 'react';
import Spacer from './Spacer';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function About({ data }) {
  return (
    <AboutSection id="about">
      <CurveWrapper />
      <TitleWrapper>
        <h2 className="section-title">About Me</h2>
        <div className="under" />
      </TitleWrapper>
      <Spacer size={32} />
      <DescriptionTextWrapper>
        <Greetings>
          <p>
            <span style={{ fontSize: '2rem', paddingRight: '4px' }}>
              &#x1F44B;
            </span>{' '}
            Hi, I'm
          </p>
          <h3>Alex G,</h3>
        </Greetings>
        <p>
          A freelance <span>Web Developer</span> with 4 years of experience in
          the industry.
        </p>
        <p>
          After 7 years spent working in the banking and IT banking business, I
          decided to switch to a more passion-related career in the web/tech
          ecosystem.
        </p>
        <p>
          While I've started my journey as a full-stack developer working with{' '}
          <span>Ruby on Rails</span>, I've lately been focusing on{' '}
          <span>Front-End development</span> through <span>React</span>, the{' '}
          <span>JAMSTACK</span> and its associated framework like{' '}
          <span>Gatsby</span> or <span>NextJs</span>.
        </p>
        <p>
          <span>Autonomous, proactive and problem-solving</span>, I'll be happy
          to jump on a call, discuss your project and help your business grow.
        </p>
      </DescriptionTextWrapper>
      <MaxWidthWrapper>
        <StackGridWrapper>
          {data?.results?.map((item) => (
            <SingleStack key={item.id}>
              {item.properties?.Name?.title?.map((titleObject) => (
                <Fragment key={titleObject?.plain_text}>
                  <StackImageWrapper>
                    <Image
                      src={item.icon?.file?.url}
                      alt={`Logo of ${titleObject?.plain_text}`}
                      layout="fill"
                    />
                  </StackImageWrapper>
                  <p>{titleObject?.plain_text}</p>
                </Fragment>
              ))}
            </SingleStack>
          ))}
        </StackGridWrapper>
      </MaxWidthWrapper>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  margin-bottom: 64px;
`;

const TitleWrapper = styled.div`
  margin: -140px auto 0 auto;
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

const CurveWrapper = styled.div`
  width: 100%;
  min-height: 14rem;
  background: linear-gradient(
    calc(56deg - 50deg),
    transparent 0%,
    transparent 63.49%,
    var(--color-background-shade2) 63.5%,
    var(--color-background-shade2) 100%
  );
`;

const DescriptionTextWrapper = styled.div`
  color: var(--color-text);
  max-width: 800px;
  text-align: center;
  margin: 16px auto;
  font-size: 1.05rem;
  p {
    margin-bottom: 8px;
  }
  span {
    color: var(--color-secondary);
    font-weight: var(--semiBold);
  }
`;

const Greetings = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 1.7rem;
  margin-bottom: 16px;
  h3 {
    font-size: 2rem;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const StackGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(auto-fill, 120px); */
  gap: 16px 24px;
  max-width: 46rem;
  margin: auto;
  justify-content: center;
`;

const rainbow = keyframes`
  0%{background-position:left}
  50%{background-position:right}
  100%{background-position:left}
`;

const SingleStack = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 130px;
  padding: 8px;
  p {
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
    font-family: var(--title-font-family);
    font-weight: var(--semiBold);
    letter-spacing: 1px;
    color: var(--text-dimmed);
  }
  &:hover {
    p {
      background: var(--color-gradient);
      background-size: 200% 200%;
      animation: ${rainbow} 2.5s ease-in-out infinite;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const StackImageWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  img {
    object-fit: contain;
  }
`;

About.propTypes = {
  data: propTypes.object.isRequired,
};
