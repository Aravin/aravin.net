import Head from "next/head"
import { useContext } from "react"
import { GlobalContext } from "../pages/_app"
import { getStrapiMedia } from "../lib/media"

const Seo = ({ seo }) => {
  const { metaTitle, metaDescription, siteName, shareImage, article } =
    useContext(GlobalContext)

  return (
    <Head>
      {metaTitle && (
        <>
          <title>{metaTitle}</title>
          <meta property="og:title" content={metaTitle} />
          <meta name="twitter:title" content={metaTitle} />
        </>
      )}
      {metaDescription && (
        <>
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta name="twitter:description" content={metaDescription} />
        </>
      )}
      {shareImage && (
        <>
          <meta property="og:image" content={shareImage} />
          <meta name="twitter:image" content={shareImage} />
          <meta name="image" content={shareImage} />
        </>
      )}
      {seo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Seo
