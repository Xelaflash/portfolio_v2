import Head from 'next/head';
// import Image from 'next/image';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Spacer from '../components/Spacer';

export default function Home() {
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
      <MaxWidthWrapper as="main">
        <h1 className="section-title">Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sed numquam neque fuga commodi harum nisi quia quidem eum obcaecati?
          Rem unde quibusdam praesentium est laboriosam error fuga nisi velit.
        </p>
        <Spacer size={32} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          error, nobis aut velit magni optio animi natus pariatur odio,
          reprehenderit assumenda quam excepturi? Suscipit at, placeat ab culpa
          recusandae temporibus!
        </p>
      </MaxWidthWrapper>
    </>
  );
}
