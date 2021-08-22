import Meta from '../../../components/Meta';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '../../../config';

const Article = ({ article }) => {
  // One way to get the article id:
  // const router = useRouter();
  // const { id } = router.query;
  //   console.log(id);
  return (
    <>
      <Meta title={`${article.title} - WebDew News`} />
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <br />
      <Link href="/">
        <a>&larr; Go Back</a>
      </Link>
    </>
  );
};

// One way of fetching the data
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  // const article = { id: '', title: '', body: '' };

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  // const articles = [];

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
