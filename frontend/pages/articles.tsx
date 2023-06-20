import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../lib/api';
import Layout from '../components/layout';
import Seo from '../components/seo';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/atom-one-dark.css';
import javascript from 'highlight.js/lib/languages/javascript';
import cs from 'highlight.js/lib/languages/csharp';
import Articles from '../components/articles';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('cs', cs);

const Article = ({ articles }: any) => {

  // todo modify to pagination
  const [articleLimit, setArticleLimit] = useState(10);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const seo = {
    metaTitle: 'Articles',
    // metaDescription: article.description,
    // shareImage: article.image,
    article: true,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <Articles articles={articles} limit={articleLimit} />
      
      {
        articleLimit <= articles.length &&
        <div className='flex items-center justify-center'>
        <button className='btn btn-outline' onClick={() => setArticleLimit(articleLimit+5)}>Load more...</button>
      </div>
      }
    </Layout>
  );
};

// export async function getStaticPaths() {
//   const articles = await fetchAPI("/articles")

//   return {
//     paths: articles.map((article: { slug: any }) => ({
//       params: {
//         slug: article.slug,
//       },
//     })),
//     fallback: false,
//   }
// }

export async function getStaticProps({ params }: any) {
  try {
    const articles = await fetchAPI('/articles', { populate: '*' });

    return {
      props: {
        articles: articles.data,
      },
      revalidate: 1,
    };

  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}

export default Article;
