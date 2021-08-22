import React from "react"
import Link from "next/link"
import NextImage from "./image"
import moment from "moment"

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a>
        <div className="card bg-white mb-5 rounded border-2 hover:border-primary-focus prose-md">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>

            <p>
              <span>Aravind Appadurai </span> on{" "}
              {moment(article.created_at).fromNow()}
            </p>

            <div className="flex">
              <div className="flex-1 mt-2">
                <p>
                  <span className="font-bold">Category</span>{" "}
                  {article.category.name}
                </p>
              </div>
              <div className="flex-1">
                {article.tags && (
                  <p className="badge">
                    {article.tags?.map((_) => "#" + _.slug).join(", ")}
                  </p>
                )}
              </div>
            </div>
            {/* <p><span className="font-semibold">Tags</span> {article.tags.reduce((_m __))}</p> */}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
