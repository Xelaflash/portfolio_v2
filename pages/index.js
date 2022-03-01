import Head from 'next/head';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import Image from 'next/image';
import Home from '../components/Home';
import About from '../components/About';
import SideBar from '../components/Sidebar';

export default function IndexPage({ stackData }) {
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
      </main>
      <Footer />
    </>
  );
}

// This gets called on every request
// TODO: check if we can optimise this
export async function getServerSideProps() {
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
  const stackData = await stackRes.json();
  // console.log(res);

  // Pass data to the page via props
  return { props: { stackData } };
}

IndexPage.propTypes = {
  stackData: propTypes.object.isRequired,
};
