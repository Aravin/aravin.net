import React, { useCallback } from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Projects } from '../components/projects';
import { Container, Engine } from 'tsparticles-engine';

const Home = ({ articles, categories, homepage }: any) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Function to handle when particles are loaded
  }, []);

  const seo = {
    metaTitle: 'Home - A technology blog.',
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <Particles
        id="tsparticles"
        init={particlesInit as any}
        loaded={particlesLoaded as any}
        options={{
          background: {},
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
              push: { quantity: 1 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: 'rgb(33, 201, 84)' },
            links: { color: 'rgb(33, 201, 84)', distance: 150, enable: true, opacity: 0.5, width: 1 },
            collisions: { enable: true },
            move: { direction: 'none', enable: true, outMode: 'bounce', random: false, speed: 2, straight: false },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { random: true, value: 5 },
          },
          detectRetina: true,
        }}
      />
      <div className="card">
        <div className="hero min-h-screen bg-white rounded px-5 mb-5">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <Image
              src="/Aravin.png"
              width={200}
              height={200}
              className="max-w-sm"
              alt="Aravind Appadurai Photo"
              layout="responsive"
            />
            <div>
              <h1 className="mb-5 text-5xl font-bold">Hello 👋🏻 I&apos;m Aravind Appadurai</h1>
              <p className="mb-10">
              Results-driven and innovative Lead Software Engineer with 10+ years of experience leading development teams on large-scale enterprise projects. Expert at translating complex technical concepts for non-technical audiences.
              </p>

              <div className="my-10">
                <p className="mb-5"> Connect with me on following channels: </p>
                <a href="https://github.com/Aravin/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" className="w-10 mr-3 inline" />
                </a>
                <a href="https://stackoverflow.com/users/3058254/aravin" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faStackOverflow} size="lg" className="w-10 mr-3 inline text-red-400" />
                </a>
                <a href="https://www.linkedin.com/in/itaravin/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="w-10 mr-3 inline text-blue-700" />
                </a>
                <a href="https://twitter.com/itaravin" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="lg" className="w-10 mr-3 inline text-blue-400" />
                </a>
                <a href="https://www.fb.me/itarav" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="lg" className="w-10 inline text-blue-600" />
                </a>
              </div>

              <div className="my-10">
                <p className="mb-5"> Multi Cloud Certified Engineer: </p>
               <div className="flex flex-wrap">
               <a href="https://www.credly.com/earner/earned/badge/23f1a98d-b0b0-4e5b-8344-c26c01d3223a" target="_blank">
               <Image src="/certs/aws.png" width={100} height={100} className="max-w-sm" alt="AWS"></Image>
               </a>
               <a href="https://google.accredible.com/f8e7dd22-9060-4403-9b6e-3d5a91361120?key=7124d68898d06b75ec6c42cb7e2490086e1545f64e2956aa6d31bdd89a775eed" target="_blank">
               <Image src="/certs/gcp.png" width={100} height={100} className="max-w-sm" alt="GCP"></Image>
               </a>
               </div>
              </div>

              <div className="my-10">
                E-Resume: <a href="https://resume.aravin.net/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">Click here to Open</a>
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

export async function getStaticProps() {
  const [articles, categories] = await Promise.all([
    fetchAPI('/articles', { populate: '*' }),
    fetchAPI('/categories', { populate: '*' }),
  ]);

  return {
    props: { articles: articles.data, categories: categories.data },
    revalidate: 1,
  };
}

export default Home;
