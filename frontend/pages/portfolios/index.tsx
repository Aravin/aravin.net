import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { Projects } from '../../components/projects';

const Home = () => {
  const seo = {
    metaTitle: 'Portfolios',
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div>
        <div className="text-center mt-10 mb-5">
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="px-5 py-5 mb-5 w-full">
          <Projects />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
