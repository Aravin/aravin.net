import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a>
        <div className="card shadow-lg bg-white ">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p>Category: {article.category.name}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
