import Image from 'next/image';
import { Fragment } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { QUERIES } from '../styles/constants';
import Spacer from './Spacer';
import MaxWidthWrapper from './MaxWidthWrapper';
import Button from './Button';
import SectionTitle from './SectionTitle';

export default function About({ data }) {
  return (
    <AboutSection id="about">
      <CurveWrapper />
      <SectionTitle title="About Me" margin="-140px auto 0 auto;" />
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
          A seasoned <span>Frontend Developer</span> with 5 years of experience
          in the tech industry.
        </p>
        <p>
          After 7 years in banking and IT, I transitioned to my true passion in
          the web/tech world.
        </p>
        <p>
          My expertise lies in <span>Frontend development</span>, specializing
          in <span>TypeScript</span>, <span>React</span>, and{' '}
          <span>NextJs</span> .I started as a <span>Full Stack developer</span>{' '}
          with <span>Ruby on Rails</span> but have since honed my skills in
          these technologies.
        </p>
        <p>
          In addition to my technical skills, I bring{' '}
          <span>autonomy, proactivity and strong problem-solving</span>{' '}
          abilities to the table. I'll be happy to jump on a call, discuss your
          project and help your business grow.
        </p>
      </DescriptionTextWrapper>
      <MaxWidthWrapper>
        <StackGridWrapper>
          {data?.stackData?.results?.map((item) => (
            <SingleStack key={item.id}>
              {item.properties?.Name?.title?.map((titleObject) => (
                <Fragment key={titleObject?.plain_text}>
                  <StackImageWrapper>
                    <Image
                      src={item.properties?.Logo?.url}
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
        <ButtonWrapper>
          <a
            href="https://alexgwebdev.notion.site/ccd78484faf74078a6cba18f37880225?v=55880afa00284854b98d35610210ccda"
            target="_blank"
            rel="noreferrer noopener"
          >
            <MoreButton
              text="View more"
              color="var(--color-background)"
              background="var(--color-secondary)"
            />
          </a>
        </ButtonWrapper>
      </MaxWidthWrapper>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  margin-bottom: 64px;
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
  margin: 32px auto 64px auto;
  font-size: 1.05rem;
  p {
    margin-bottom: 8px;
  }
  span {
    color: var(--color-secondary);
    font-weight: var(--semiBold);
  }
  @media ${QUERIES.tabletAndDown} {
    max-width: 700px;
  }
  @media ${QUERIES.phoneAndDown} {
    font-size: 1rem;
    margin: 16px auto;
    padding: 16px;
  }
`;

const Greetings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  margin-bottom: 8px;
  h3 {
    font-size: 1.7rem;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const StackGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  max-width: 46rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  @media ${QUERIES.phoneAndDown} {
    max-width: 18rem;
  }
`;

const rainbow = keyframes`
  0%{background-position:left}
  50%{background-position:right}
  100%{background-position:left}
`;

const SingleStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
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
  width: 90px;
  height: 90px;
  img {
    object-fit: contain;
  }
  @media ${QUERIES.phoneAndDown} {
    width: 80px;
    height: 80px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 64px auto;
  width: fit-content;
`;

const MoreButton = styled(Button)`
  padding: 14px 40px;
`;

About.propTypes = {
  data: propTypes.object.isRequired,
};
