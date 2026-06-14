import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Card = ({ article }: any) => {
  const navigate = useNavigate();
  return (
    <Link to={`/article/${article.attributes.slug}`}>
      <div className="card bg-white mb-5 rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 prose-md overflow-hidden">
        <div className="card-body">
          <h2 className="card-title">{article.attributes.title}</h2>

          <p>
            <span>- Aravind Appadurai </span> on {moment(article.attributes.createdAt).fromNow()}
          </p>

          <div className="flex mt-2">
            <div className="flex-1">
              <p>
                <span className="font-bold">Category </span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/category/${article.attributes.category.data.attributes.name}`);
                  }}
                  className="hover:underline cursor-pointer"
                >
                  {article.attributes.category.data.attributes.name}
                </span>
              </p>
            </div>
            <div className="flex-1">
              {article.attributes.tags.data.length > 0 && (
                <p>
                  <span className="font-bold">Tags </span>
                  {article.attributes.tags.data?.map((_: any) => {
                    return (
                      <span
                        key={_.attributes.slug}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/tag/${_.attributes.slug}`);
                        }}
                        className={
                          'badge ml-1 border-none text-white font-semibold cursor-pointer shadow-sm'
                        }
                        style={
                          _.attributes.color && {
                            backgroundColor:
                              _.attributes.color === '#fff' ? '#555' : _.attributes.color,
                          }
                        }
                      >{`#${_.attributes.slug}`}</span>
                    );
                  })}
                </p>
              )}
            </div>
          </div>
          {/* <p><span className="font-semibold">Tags</span> {article.tags.reduce((_m __))}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
