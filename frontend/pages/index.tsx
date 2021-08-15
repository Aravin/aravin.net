import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faGoogle,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import emiCalculatorImage from "../public/projects/emi-calculator.png"
import sipCalculatorImage from "../public/projects/sip-calculator.png"
import warrantyManagerImage from "../public/projects/warranty-manager.jpg"

const Home = ({ articles, categories, homepage }: any) => {
  return (
    <Layout categories={categories} seo={Seo}>
      <Seo seo={homepage.seo} />
      <div>
        <div className="hero min-h-screen bg-white rounded px-5 mb-5">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <Image
              src="/Aravind_Appadurai_Photo.png"
              width="400"
              height="400"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Aravind Appadurai Photo"
            ></Image>
            <div>
              <h1 className="mb-5 text-5xl font-bold">
                Hello 👋🏽 I&apos;m Aravind Appadurai
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

              <div className="my-10 w-50">
                <a
                  href="https://www.buymeacoffee.com/aravin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    height="60px"
                    width="217px"
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center place-self-stretch">
            <div className="card compact text-center shadow-2xl p-5 rounded border-2 hover:border-primary-focus bg-white">
              <figure className="px-5 pt-5">
                <Image
                  width="400"
                  height="250"
                  layout="responsive"
                  src="/projects/servicebird.png"
                  className=""
                  alt="servicebird.in"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a
                    href="https://www.servicebird.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ServiceBird.in
                  </a>
                </h2>
                <p>Local Home Appliance Service Company in Chennai</p>
                <div className="justify-center card-actions">
                  <div>
                    <div className="badge badge-primary m-2">Next.js</div>
                    <div className="badge badge-primary m-2">React.js</div>
                    <div className="badge badge-primary m-2">JavaScript</div>
                    <div className="badge badge-primary m-2">TypeScript</div>
                    <div className="badge badge-primary m-2">Vercel</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card compact text-center shadow-2xl p-5 rounded border-2 hover:border-primary-focus bg-white">
              <figure className="px-5 pt-5">
                <Image
                  width="400"
                  height="250"
                  layout="responsive"
                  src="/projects/epix.io.png"
                  className=""
                  alt="epix.io Project"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a
                    href="https://www.epix.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    epix.io
                  </a>
                </h2>
                <p>
                  Upcoming open source project with everyday tools and services
                </p>
                <div className="justify-center card-actions">
                  <div>
                    <div className="badge badge-primary m-2">Angular.js</div>
                    <div className="badge badge-primary m-2">TypeScript</div>
                    <div className="badge badge-primary m-2">Docker</div>
                    <div className="badge badge-primary m-2">Firebase</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card compact text-center shadow-2xl p-5 rounded border-2 hover:border-primary-focus bg-white">
              <figure className="px-5 pt-5">
                <Image
                  width="400"
                  height="250"
                  layout="responsive"
                  src="/projects/frontline-courier.png"
                  className=""
                  alt="epix.io Project"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a
                    href="https://www.frontlinecourier.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FrontlineCourier.com
                  </a>
                </h2>
                <p>
                  Courier company website with client and admin portal with
                  end-to-end solution from booking to tracking the courier.
                </p>
                <div className="justify-center card-actions">
                  <div>
                    <div className="badge badge-primary m-2">Angular.js</div>
                    <div className="badge badge-primary m-2">TypeScript</div>
                    <div className="badge badge-primary m-2">Firebase</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card compact text-center shadow-2xl p-5 rounded border-2 hover:border-primary-focus bg-white">
              <figure className="px-5 pt-5">
                <Image
                  src={sipCalculatorImage}
                  layout="responsive"
                  className=""
                  alt="epix.io Project"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a
                    href="https://play.google.com/store/apps/details?id=io.epix.sip"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SIP Calculator
                  </a>
                </h2>
                <p>SIP, SWP, STP and Lumpsum returns Calculator Android App</p>
                <div className="justify-center card-actions">
                  <div>
                    <div className="badge badge-primary m-2">Flutter</div>
                    <div className="badge badge-primary m-2">Android</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card compact text-center shadow-2xl p-5 rounded border-2 hover:border-primary-focus bg-white">
              <figure className="px-5 pt-5">
                <Image
                  src={warrantyManagerImage}
                  layout="responsive"
                  className=""
                  alt="epix.io Project"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a
                    href="https://play.google.com/store/apps/details?id=io.epix.warranty_manager"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Warranty Manager
                  </a>
                </h2>
                <p>
                  Android application to manage your product or service warranty
                </p>
                <div className="justify-center card-actions">
                  <div>
                    <div className="badge badge-primary m-2">Flutter</div>
                    <div className="badge badge-primary m-2">Android</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card compact text-center shadow-2xl p-5 rounded border-2 hover:border-primary-focus bg-white">
              <figure className="px-5 pt-5">
                <Image
                  src={emiCalculatorImage}
                  layout="responsive"
                  className=""
                  alt="epix.io Project"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a
                    href="https://play.google.com/store/apps/details?id=io.epix.emi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EMI Calculator
                  </a>
                </h2>
                <p>
                  Android application to calculate the Loan EMI and Compare
                  Loans
                </p>
                <div className="justify-center card-actions">
                  <div>
                    <div className="badge badge-primary m-2">Flutter</div>
                    <div className="badge badge-primary m-2">Android</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
