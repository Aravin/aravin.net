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
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // await console.log(container);
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
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: 'rgb(33, 201, 84)',
            },
            links: {
              color: 'rgb(33, 201, 84)',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="card">
        <div className="hero min-h-screen bg-white rounded px-5 mb-5">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <Image
              src="/Aravin.png"
              width="400"
              height="400"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Aravind Appadurai Photo"
            ></Image>
            <div>
              <h1 className="mb-5 text-5xl font-bold">
                Hello 👋🏻 I&apos;m Aravind Appadurai
              </h1>
              <p className="mb-10">
                I am working as a Full Stack Software Developer in a Private
                Company in Chennai. I&apos;ve worked on .NET, Node.js,
                JavaScript, TypeScript etc.
              </p>

              <div className="my-10">
                <p className="mb-5"> Connect with me on following channels: </p>
                <a
                  href="https://github.com/Aravin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xs"
                    className="w-10 mr-6 inline"
                  />
                </a>
                <a
                  href="https://stackoverflow.com/users/3058254/aravin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    size="xs"
                    className="w-10 mr-6 inline text-red-400"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/itaravin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xs"
                    className="w-10 mr-6 inline text-blue-700"
                  />
                </a>
                {/* <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faGoogle} size="xs" className="w-10 mr-6 inline text-red-600" />
                </a> */}
                <a
                  href="https://twitter.com/itaravin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xs"
                    className="w-10 mr-6 inline text-blue-400"
                  />
                </a>
                <a
                  href="https://www.fb.me/itarav"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="xs"
                    className="w-10 mr-6 inline text-blue-600"
                  />
                </a>
              </div>

              <a
                  href="tel:+919710549943"
                  target="_blank"
                  rel="noreferrer"
                >
                 +91 9710549943
                </a>

              <div className="my-10 w-50">
                <a
                  href="https://www.buymeacoffee.com/aravin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    height="60"
                    width="217"
                  ></Image>
                </a>
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
          <div>
            <Articles articles={articles} limit={5} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI('/articles', { populate: '*' }),
    fetchAPI('/categories', { populate: '*' }),
    // fetchAPI("/homepage"),
  ]);

  return {
    props: { articles: articles.data, categories: categories.data },
    revalidate: 1,
  };
}

export default Home;
