import Head from 'next/head';
import propTypes, { oneOfType } from 'prop-types';
import Error from './_error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import SideBar from '../components/Sidebar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import TriangleSeparator from '../components/TriangleSeparator';
import TrianglesSeparator from '../components/TrianglesSeparator';

// TODO: check if better for performance than server side
export async function getStaticProps({ res }) {
  // Fetch data from Notion API
  const StackRequestBody = {
    filter: {
      property: 'Wesbite Display',
      select: {
        equals: 'Yes',
      },
    },
    sorts: [
      {
        property: 'Website order',
        direction: 'ascending',
      },
    ],
  };

  const stackOptions = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(StackRequestBody),
  };

  // Fecth Notion API for Stack
  const stackDatabaseId = `${process.env.NEXT_PUBLIC_STACK_NOTION_DB_ID}`;

  const stackRes = await fetch(
    `https://api.notion.com/v1/databases/${stackDatabaseId}/query`,
    stackOptions
  );
  const errorCode = stackRes.ok ? false : stackRes.statusCode;
  const stackData = await stackRes.json();
  // Pass data to the page via props
  return {
    props: { errorCode, stackData },
  };
}

export default function IndexPage({ stackData, errorCode }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <>
      <Head>
        <title>Alex G | Web Developer</title>
        <meta
          property="og:title"
          content="Alex G | Web Developer"
          key="title"
        />
      </Head>
      <Header />
      <SideBar />
      <main>
        <Home />
        <About data={stackData} />
        <TriangleSeparator />
        <Projects />
        <TrianglesSeparator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

IndexPage.propTypes = {
  stackData: propTypes.object.isRequired,
  errorCode: oneOfType([propTypes.number, propTypes.bool]),
};
