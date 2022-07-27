import React from 'react';
import Card from './card';

const Articles = ({ articles, limit }) => {
  articles?.sort((a, b) => b.id - a.id);
  // const leftArticlesCount = Math.ceil(articles.length / 5)
  // const leftArticles = articles.slice(0, leftArticlesCount)
  // const rightArticles = articles.slice(leftArticlesCount, articles.length)
  const filteredArticles = articles?.slice(0, limit || articles.length);

  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-2">
        <div>
          {filteredArticles.map((article) => {
            return <Card article={article} key={article.attributes.slug} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
