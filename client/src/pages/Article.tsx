import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import moment from 'moment';
import { fetchAPI } from '../lib/api';
import Layout from '../components/layout';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/seo';
import Articles from '../components/articles';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/atom-one-dark.css';
import javascript from 'highlight.js/lib/languages/javascript';
import cs from 'highlight.js/lib/languages/csharp';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('cs', cs);

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  useEffect(() => {
    // Scroll to the top whenever the slug changes (e.g. clicking a related article)
    window.scrollTo(0, 0);

    async function load() {
      if (!slug) return;
      const res = await fetchAPI('/articles', { filters: { slug } });
      if (res && res.data && res.data.length > 0) {
        const currentArticle = res.data[0].attributes;
        setArticle(currentArticle);

        // Fetch all articles to find related ones
        const allRes = await fetchAPI('/articles');
        if (allRes && allRes.data) {
          const currentCategory = currentArticle.category?.data?.attributes?.name;
          const currentTags = currentArticle.tags?.data?.map((t: any) => t.attributes.slug) || [];
          const currentDate = new Date(
            currentArticle.createdAt || currentArticle.published_at,
          ).getTime();

          const scoredArticles = allRes.data
            .filter((a: any) => a.attributes.slug !== slug) // exclude current
            .map((a: any) => {
              let score = 0;
              const aAttrs = a.attributes;

              // Category Match
              if (currentCategory && aAttrs.category?.data?.attributes?.name === currentCategory) {
                score += 3;
              }

              // Tags Match
              const aTags = aAttrs.tags?.data?.map((t: any) => t.attributes.slug) || [];
              currentTags.forEach((t: string) => {
                if (aTags.includes(t)) score += 1;
              });

              // Timeline Match
              const aDate = new Date(aAttrs.createdAt || aAttrs.published_at).getTime();
              const diffTime = Math.abs(currentDate - aDate);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

              if (diffDays <= 90)
                score += 2; // within ~3 months
              else if (diffDays <= 180) score += 1; // within ~6 months

              return { ...a, _score: score };
            });

          // Sort by score descending
          scoredArticles.sort((a: any, b: any) => b._score - a._score);
          setRelatedArticles(scoredArticles.slice(0, 3));
        }
      }
    }
    load();
  }, [slug]);

  useEffect(() => {
    if (article) hljs.highlightAll();
  }, [article]);

  if (!article)
    return (
      <Layout>
        <div className="p-8 text-center">Loading...</div>
      </Layout>
    );

  const seo = {
    metaTitle: article?.title,
    metaDescription: article?.description,
    shareImage: article?.image,
    article: true,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Cover Image */}
          {article.image && (
            <img
              src={article.image}
              className="w-full h-64 md:h-[400px] object-cover"
              alt={article.title}
            />
          )}

          <div className="p-8 sm:p-12 lg:p-16">
            {/* Markdown Content */}
            <div className="prose max-w-none prose-img:rounded-2xl prose-img:shadow-lg prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-800 transition-colors">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.content}</ReactMarkdown>
            </div>

            <hr className="my-12 border-gray-200" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-wrap gap-4 items-center flex-1">
                {/* Category */}
                {article.category?.data && (
                  <div className="flex items-center">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mr-2">
                      Category
                    </span>
                    <Link to={`/category/${article.category.data.attributes.name}`}>
                      <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors whitespace-nowrap shadow-sm border border-blue-100">
                        {article.category.data.attributes.name}
                      </span>
                    </Link>
                  </div>
                )}

                {/* Tags */}
                {article.tags?.data?.length > 0 && (
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mr-1 ml-2 border-l pl-4 border-gray-200">
                      Tags
                    </span>
                    {article.tags.data.map((_: any) => (
                      <Link key={_.attributes.slug} to={`/tag/${_.attributes.slug}`}>
                        <span
                          className="px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                          style={
                            _.attributes.color && {
                              backgroundColor:
                                _.attributes.color === '#fff' ? '#555' : _.attributes.color,
                            }
                          }
                        >
                          #{_.attributes.slug}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Author Box */}
              <div className="flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 min-w-max shadow-sm">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/Aravin.png"
                    alt="Aravind Appadurai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Aravind Appadurai</p>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wide mt-1">
                    {moment(article.published_at || article.createdAt).format('MMM Do YYYY')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 px-4 sm:px-0 text-center">
              Related Articles
            </h3>
            <div className="-mx-2">
              <Articles articles={relatedArticles} limit={3} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArticlePage;
