import propTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { QUERIES } from '../styles/constants';
import {
  PageWrapper,
  PageContentWrapper,
  TitleWrapper,
  LogoWrapper,
  ImageWrapper,
  LinkWrapper,
  LinkToHome,
} from '../styles/error';
import Logo from '../components/Logo';

function Error({ statusCode, status }) {
  return (
    <>
      <Head>
        <title>Oops! Error</title>
      </Head>
      <ErrorPageWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <PageWrapper>
          <PageContentWrapper>
            <TitleWrapperError>
              <h1 className="section-title">Oops! That's embarrassing...</h1>
              <h2 className="section-title">Error with the API</h2>
            </TitleWrapperError>
            <ErrorWrapper>
              <p>
                {statusCode
                  ? `Error ${statusCode}: ${status}`
                  : 'Error on client side. Please try again later.'}
              </p>
            </ErrorWrapper>

            <ImageWrapper>
              <Image src="/404.svg" alt="Error" width={500} height={376} />
            </ImageWrapper>
            <LinkWrapper>
              <Link href="/" passHref>
                <LinkToHome>Go back home</LinkToHome>
              </Link>
            </LinkWrapper>
          </PageContentWrapper>
        </PageWrapper>
      </ErrorPageWrapper>
    </>
  );
}

const ErrorPageWrapper = styled.div`
  padding: 2rem;
`;

const TitleWrapperError = styled(TitleWrapper)`
  margin: -2.5rem auto 0;
  h2 {
    font-size: 2.5rem;
  }
  @media ${QUERIES.phoneAndDown} {
    margin: -1rem auto 1rem;
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const ErrorWrapper = styled.div`
  p {
    margin: 1.5rem auto;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    color: var(--color-logo-red);
  }
`;

Error.getInitialProps = ({ res, err }) => {
  let statusCode;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }
  return { statusCode };
};

Error.propTypes = {
  statusCode: propTypes.number.isRequired,
  status: propTypes.string.isRequired,
};

export default Error;
