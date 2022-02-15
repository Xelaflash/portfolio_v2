import Head from 'next/head';
import Image from 'next/image';

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
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed
        numquam neque fuga commodi harum nisi quia quidem eum obcaecati? Rem
        unde quibusdam praesentium est laboriosam error fuga nisi velit.
      </p>
    </>
  );
}
