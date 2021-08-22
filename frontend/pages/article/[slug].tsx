import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"

const Article = ({ article, categories }: any) => {
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <Layout categories={categories} seo={seo}>
      <Seo seo={seo} />
      <div className="prose max-w-screen-lg min-h-full mx-auto bg-white sm:p-4 md:p-8 lg:p-12">
        <div id="banner" data-src={imageUrl} data-srcset={imageUrl}>
          <h1>{article.title}</h1>
          <p className="mt-2 mb-4">
            {article.tags?.map((a: { slug: {} | null | undefined }) => {
              return (
                <span className="badge badge-primary" key={a.slug + ""}>
                  #{a.slug}
                </span>
              )
            })}
          </p>
        </div>
        <div>
          <div className="prose max-w-screen-lg">
            <ReactMarkdown source={article.content} escapeHtml={false} />
            <hr />

            <div className="">
              <div className="avatar">
                <div className="rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
                  {article.author.picture && (
                    <NextImage image={article.author.picture} style="" />
                  )}
                </div>
              </div>
              <p>{article.author.name}</p>
              <p>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article: { slug: any }) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: {
      article: articles[0],
      categories,
    },
    revalidate: 1,
  }
}

export default Article
