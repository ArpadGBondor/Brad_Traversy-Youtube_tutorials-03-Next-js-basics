import Meta from '../components/Meta';
import ArticleList from '../components/ArticleList';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
      <Meta />

      <ArticleList articles={articles} />
    </div>
  );
}

// To fetch data, and add it to the page as props
// 3 methods we can use:
// - getStaticProps - fetch at build time
// - getServerSideProps - fetch the data on every request - bit slower
// - getStaticPaths - dinamically generate paths based on the data we fetching

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  // const articles = [];

  return {
    props: {
      articles,
    },
  };
};
