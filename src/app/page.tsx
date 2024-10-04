import Head from 'next/head';

const Home = () => (
  <>
      <Head>
          {/* TODO: Do I really need this stuff here if it's in the layout.tsx? */}
          <title>Mansfield Cat Rescue</title>
          <meta name="description" content="Landing page for Mansfield Cat Rescue" />
          <meta property="og:title" content="Mansfield Cat Rescue" />
          {/* TODO: Put a thumbnail in*/}
          <meta property="og:image" content="THUMBNAIL_PLACEHOLDER" />
          {/* TODO: social media metadata */}
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h1>Mansfield Cat Rescue</h1>
  </>
);

export default Home;
