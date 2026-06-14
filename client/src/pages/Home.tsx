import React from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import { Projects } from '../components/projects';

const Home = () => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    async function load() {
      const [arts] = await Promise.all([fetchAPI('/articles', { populate: '*' })]);
      setArticles(arts.data);
    }
    load();
  }, []);

  const seo = {
    metaTitle: 'Home - A technology blog.',
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="card">
        <div className="relative min-h-[85vh] bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl px-6 lg:px-16 mb-16 shadow-sm overflow-hidden flex items-center">
          {/* Decorative background blur */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full relative z-10 py-16 gap-12 lg:gap-24">
            {/* Image Section */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative">
              <div className="relative group">
                {/* Glowing shadow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-400 rounded-[2.5rem] blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/Aravin.png"
                  className="relative max-w-sm w-full object-cover rounded-[2rem] shadow-2xl ring-4 ring-white transform transition-transform duration-500 group-hover:scale-[1.02]"
                  alt="Aravind Appadurai"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Available for New Opportunities
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                Hello 👋🏻 I&apos;m <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  Aravind Appadurai
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Results-driven and innovative Lead Software Engineer with 10+ years of experience
                leading development teams on large-scale enterprise projects. Expert at translating
                complex technical concepts for non-technical audiences.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 justify-center lg:justify-start">
                <a
                  href="https://resume.aravin.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary hover:brightness-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center"
                >
                  View E-Resume
                </a>
              </div>

              {/* Socials & Certs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-gray-200 pt-10 mt-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
                    Connect with me
                  </h3>
                  <div className="flex gap-5 justify-center lg:justify-start">
                    <a
                      href="https://github.com/Aravin/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-900 transition-all transform hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                      href="https://stackoverflow.com/users/3058254/aravin"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-all transform hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                      <FontAwesomeIcon icon={faStackOverflow} size="2x" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/itaravin/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-blue-700 transition-all transform hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                      href="https://twitter.com/itaravin"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-all transform hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      href="https://www.fb.me/itarav"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-all transform hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
                    Multi-Cloud Certified
                  </h3>
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a
                      href="https://www.credly.com/badges/23f1a98d-b0b0-4e5b-8344-c26c01d3223a"
                      target="_blank"
                      rel="noreferrer"
                      className="transform transition-transform hover:-translate-y-1 hover:scale-105 duration-200 bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md"
                    >
                      <img
                        src="/certs/aws.png"
                        className="w-10 h-10 object-contain"
                        alt="AWS Certified"
                      />
                    </a>
                    <a
                      href="https://google.accredible.com/f8e7dd22-9060-4403-9b6e-3d5a91361120?key=7124d68898d06b75ec6c42cb7e2490086e1545f64e2956aa6d31bdd89a775eed"
                      target="_blank"
                      rel="noreferrer"
                      className="transform transition-transform hover:-translate-y-1 hover:scale-105 duration-200 bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md"
                    >
                      <img
                        src="/certs/gcp.png"
                        className="w-10 h-10 object-contain"
                        alt="GCP Certified"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 mb-5">
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="px-5 py-5 mb-5 w-full">
          <Projects />
        </div>

        <div className="text-center mt-10 mb-5">
          <h2 className="text-3xl font-bold">Recent Writings</h2>
        </div>

        <div>
          <Articles articles={articles} limit={5} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
