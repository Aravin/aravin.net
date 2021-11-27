import React, { useEffect } from "react"
import Moment from "react-moment"
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import NextImage from "../components/image"
import Seo from "../components/seo"
import { getStrapiMedia } from "../lib/media"
import hljs from "highlight.js/lib/common"
import "highlight.js/styles/atom-one-dark.css"
import javascript from "highlight.js/lib/languages/javascript"
import cs from "highlight.js/lib/languages/csharp"
import Articles from "../components/articles"
hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("cs", cs)

const Article = ({ articles }: any) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  const seo = {
    metaTitle: "Aravin.net Blog",
    // metaDescription: article.description,
    // shareImage: article.image,
    article: true,
  }

  return (
    <Layout categories={articles} seo={seo}>
      <Seo seo={seo} />
      <div className="">
        <Articles articles={articles} limit={10} />
      </div>
    </Layout>
  )
}

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
  const articles = await fetchAPI(`/articles`)

  return {
    props: {
      articles: articles,
    },
    revalidate: 1,
  }
}

export default Article
