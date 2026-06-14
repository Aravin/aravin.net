import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../lib/api';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Articles from '../components/articles';
import { useParams } from 'react-router-dom';

const ArticlesPage = () => {
  const { tag, category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetchAPI('/articles', { populate: '*' });
      if (res && res.data) {
        let arts = res.data;
        if (tag) {
          arts = arts.filter((a: any) =>
            a.attributes.tags?.data?.some((t: any) => t.attributes.slug === tag),
          );
        }
        if (category) {
          arts = arts.filter(
            (a: any) =>
              a.attributes.category?.data?.attributes?.name?.toLowerCase() ===
              category.toLowerCase(),
          );
        }

        // Sort articles by created/published date (recently created first)
        arts = arts.sort((a: any, b: any) => {
          const dateA = new Date(
            a.attributes.published_at || a.attributes.publishedAt || a.attributes.createdAt || 0,
          ).getTime();
          const dateB = new Date(
            b.attributes.published_at || b.attributes.publishedAt || b.attributes.createdAt || 0,
          ).getTime();
          return dateB - dateA;
        });

        setArticles(arts);
      }
    }
    load();
  }, [tag, category]);
  // todo modify to pagination
  const [articleLimit, setArticleLimit] = useState(10);

  const seo = {
    metaTitle: 'Articles',
    // metaDescription: article.description,
    // shareImage: article.image,
    article: true,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      {tag && (
        <div className="text-center mt-10 mb-5">
          <h2 className="text-3xl font-bold">Articles tagged with #{tag}</h2>
        </div>
      )}
      {category && (
        <div className="text-center mt-10 mb-5">
          <h2 className="text-3xl font-bold">Category: {category}</h2>
        </div>
      )}
      <Articles articles={articles} limit={articleLimit} />

      {articleLimit <= articles.length && (
        <div className="flex items-center justify-center">
          <button className="btn btn-outline" onClick={() => setArticleLimit(articleLimit + 5)}>
            Load more...
          </button>
        </div>
      )}
    </Layout>
  );
};

export default ArticlesPage;
