import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Moment from 'react-moment';
import { fetchAPI } from '../../lib/api';
import Layout from '../../components/layout';
import Image from 'next/image';
import Seo from '../../components/seo';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/atom-one-dark.css';
import javascript from 'highlight.js/lib/languages/javascript';
import cs from 'highlight.js/lib/languages/csharp';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('cs', cs);

const Article = ({ article }: any) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  // const imageUrl = article.image && getStrapiMedia(article.image)

  const seo = {
    metaTitle: article?.title,
    metaDescription: article?.description,
    shareImage: article?.image,
    article: true,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="prose max-w-screen-lg min-h-full mx-auto bg-white sm:p-4 md:p-8 lg:p-12">
        <div id="banner">
          {/* <div id="banner" data-src={imageUrl} data-srcset={imageUrl}> */}
          <h1>{article.title}</h1>
          {/* <p className="mt-2 mb-4">
            {article.tags &&
              article.tags?.map((a: any) => {
                return (
                  <span
                    className="badge ml-1"
                    style={a.color && { backgroundColor: a.color }}
                    key={a.slug + ""}
                  >
                    #{a.slug}
                  </span>
                )
              })}
          </p> */}
        </div>
        <div>
          <div className="prose max-w-screen-lg">
            <div>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {article.content}
              </ReactMarkdown>
            </div>
            <hr />

            <div className="">
              <div className="avatar">
                <div className="rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src="/Aravin.png"
                    alt="Aravind Appadurai"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <p>{article.author.data.attributes.username}</p>
              <p>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const articles = await fetchAPI('/articles', { fields: 'slug' });

  return {
    paths: articles.data?.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const articles = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const categories = await fetchAPI('/categories');

  return {
    props: {
      article: articles.data[0].attributes,
      categories: categories.data,
    },
    revalidate: 1,
  };
}

export default Article;
