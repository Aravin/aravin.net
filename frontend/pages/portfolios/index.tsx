import React from "react"
import Image from "next/image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import emiCalculatorImage from "../../public/projects/emi-calculator.png"
import sipCalculatorImage from "../../public/projects/sip-calculator.png"
import warrantyManagerImage from "../../public/projects/warranty-manager.jpg"

const Home = () => {
  const seo = {
    metaTitle: "Portfolios",
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <div>
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
      </div>
    </Layout>
  )
}

export default Home
