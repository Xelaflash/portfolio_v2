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
import Spacer from '../components/Spacer';

import { loadStack } from '../utils/fetch-stack.js';
import { loadWorkProjets } from '../utils/fetch-workProjects.js';
import { loadPersoProjets } from '../utils/fetch-persoProjects.js';

// Static Site Generation => fetch Data from Notion API
export async function getStaticProps() {
  const stack = await loadStack();
  const workProjects = await loadWorkProjets();
  const persoProjects = await loadPersoProjets();
  return {
    props: { stack, workProjects, persoProjects },
  };
}
export default function IndexPage({ stack, workProjects, persoProjects }) {
  // const stackObj = stack.stackData;

  const allProjects = Object.assign(workProjects, persoProjects);

  // TODO: Handle error
  // if (stackObj.object === 'error' || workProjectsObj.object === 'error') {
  //   return <Error statusCode={stackObj.code} />;
  // }
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
        <About data={stack} />
        <TriangleSeparator />
        <Projects data={allProjects} />
        <TrianglesSeparator />
        <Contact />
        <Spacer size={48} />
      </main>
      <Footer />
    </>
  );
}

IndexPage.propTypes = {
  stack: propTypes.object.isRequired,
  workProjects: propTypes.object.isRequired,
  persoProjects: propTypes.object.isRequired,
};
