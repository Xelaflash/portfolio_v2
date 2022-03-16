import styled from 'styled-components';
import Head from 'next/head';
import { QUERIES } from '../styles/constants';
import Logo from '../components/Logo';
import SectionTitle from '../components/SectionTitle';
import {
  LogoWrapper,
  LegalWrapper,
  SubSectionWrapper,
  Subtitle,
} from '../styles/regulatory';

export default function Legal() {
  return (
    <LegalWrapper>
      <Head>
        <title>Alex G | Web Developer - Legal</title>
      </Head>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <LegalPageWrapper>
        <SectionTitle
          title="Legal Notice / Mentions Légales"
          margin="2rem auto 4rem auto;"
        />
        <SubSectionWrapper>
          <Subtitle>Editor/Editeur</Subtitle>
          <p>
            Alexandre Gros
            <br />
            +1 (917) 624-3723 <br />
            alex.gros.pro@gmail.com <br />
            SIRET: 838 546 406 00011
          </p>
        </SubSectionWrapper>
        <SubSectionWrapper>
          <Subtitle>
            {' '}
            Publication director/ Responsable de publication{' '}
          </Subtitle>
          <p>
            Alexandre Gros <br />
            alex.gros.pro@gmail.com
          </p>
        </SubSectionWrapper>
        <SubSectionWrapper>
          <Subtitle>Hébergeur / Hosting</Subtitle>
          <p>
            <small>
              Website hosted by / site internet hébergé par la société :
            </small>
            <br />
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133, <br />
            Walnut, CA 91789 <br />
            United States
            <br />
            <br />
            url : https://vercel.com/
          </p>
        </SubSectionWrapper>
      </LegalPageWrapper>
    </LegalWrapper>
  );
}

const LegalPageWrapper = styled.section`
  margin: -4rem auto 2rem auto;
  text-align: center;
  p {
    font-size: 1.1rem;
  }
  @media ${QUERIES.tabletAndDown} {
    margin: -2rem auto 2rem auto;
  }
`;
