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

            <div className="flex mt-2">
              <div className="flex-1">
                <p>
                  <span className="font-bold underline">Category </span>
                  <span>{article.category.name}</span>
                </p>
              </div>
              <div className="flex-1">
                {article.tags?.length > 0 && (
                  <p>
                    <span className="font-bold underline">Tags </span>
                    {article.tags?.map((_) => {
                      return (
                        <span
                          key={_.color}
                          className={"badge ml-1"}
                          style={_.color && { backgroundColor: _.color }}
                        >{`#${_.slug}`}</span>
                      )
                    })}
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
