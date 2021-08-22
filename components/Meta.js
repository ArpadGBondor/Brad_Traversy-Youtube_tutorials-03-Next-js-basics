import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <link rel="icon" href="/icons/gabriel.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDew News',
  description: 'Next.js Crash Course tutorial project by Brad Traversy',
  keywords: 'Next.js, tutorial, web development, programming',
};

export default Meta;
