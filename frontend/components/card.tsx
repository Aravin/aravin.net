import React, { useEffect } from 'react';
import Link from 'next/link';
import NextImage from './image';
import moment from 'moment';

const Card = ({ article }: any) => {
  return (
    <Link as={`/article/${article.attributes.slug}`} href="/article/[id]">
        <div className="card bg-white mb-5 rounded border-2 hover:border-primary-focus prose-md">
          <div className="card-body">
            <h2 className="card-title">{article.attributes.title}</h2>

            <p>
              <span>- Aravind Appadurai </span> on{' '}
              {moment(article.attributes.createdAt).fromNow()}
            </p>

            <div className="flex mt-2">
              <div className="flex-1">
                <p>
                  <span className="font-bold">Category </span>
                  <span>
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
                          key={_.attributes.color}
                          className={'badge ml-1'}
                          style={
                            _.attributes.color && {
                              backgroundColor: _.attributes.color === '#fff' ? '#555' : _.attributes.color,
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
