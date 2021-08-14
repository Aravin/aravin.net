import React from "react"
import Link from "next/link"
import NextImage from "./image"
import moment from "moment"

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a>
        <div className="card bg-white shadow-2xl mb-5">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p><span className="font-semibold">Written </span>{moment(article.created_at).fromNow()}</p>
            <p><span className="font-bold">Category</span> {article.category.name}</p>
            {/* <p><span className="font-semibold">Tags</span> {article.tags.reduce((_m __))}</p> */}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
