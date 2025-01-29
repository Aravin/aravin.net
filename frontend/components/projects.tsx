import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emiCalculatorImage from '../public/projects/emi-calculator.png';
import sipCalculatorImage from '../public/projects/sip-calculator.png';
import warrantyManagerImage from '../public/projects/warranty-manager.jpg';
import Image from "next/legacy/image";

export const Projects = () => {
  return <>
    <div className="flex flex-wrap justify-center">
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-80 h-40 self-center">
          <Image
            layout="fill"
            src="/projects/resumevita-com.png"
            alt="resumevita.com"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <a
              href="https://www.resumevita.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              ResumeVita.com
            </a>
          </h2>
          <p className="p-4">Open Source Resume Generator</p>
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
      </div>
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-80 h-40 self-center">
          <Image
            layout="fill"
            src="/projects/servicebird.png"
            alt="servicebird.in"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <a
              href="https://st-air-zone.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              ServiceBird.in
            </a>
          </h2>
          <p className="p-4">Local Home Appliance Service Company in Chennai</p>
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
      </div>
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-80 h-40 self-center">
          <Image
            layout="fill"
            src="/projects/tamilnative.png"
            alt="Tamilnative.com"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <a
              href="https://tamil-native.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              Tamilnative
            </a>
          </h2>
          <p className="p-4">
          Effortlessly ship your goods from Tamil Nadu to global destinations with our comprehensive logistics solutions
          </p>
          <div className="justify-center card-actions">
            <div>
              <div className="badge badge-primary m-2">Next.js</div>
              <div className="badge badge-primary m-2">TypeScript</div>
              <div className="badge badge-primary m-2">Zoho CRM</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-80 h-40 self-center">
          <Image
            layout="fill"
            src="/projects/epix.io.png"
            alt="epix.io Project"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <a
              href="https://next-epix-8gfvniujv-aravin.vercel.app/#"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              epix.io
            </a>
          </h2>
          <p className="p-4">
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
      </div>
      
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-80 h-40 self-center">
          <Image
            layout="fill"
            src="/projects/frontline-courier.png"
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
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              FrontlineCourier.com
            </a>
          </h2>
          <p className="p-4">
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
      </div>
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-40 h-40 self-center">
          <Image
            src={sipCalculatorImage}
            layout="fill"
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
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              SIP Calculator
            </a>
          </h2>
          <p className="p-4">SIP, SWP, STP and Lumpsum returns Calculator Android App</p>
          <div className="justify-center card-actions">
            <div>
              <div className="badge badge-primary m-2">Flutter</div>
              <div className="badge badge-primary m-2">Android</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-40 h-40 self-center">
          <Image
            src={warrantyManagerImage}
            layout="fill"
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
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              Warranty Manager
            </a>
          </h2>
          <p className="p-4">
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
      </div>
      <div className="sm:basis-full md:basis-1/2 lg:basis-2/6">
        <div className='card compact text-center shadow-2xl p-4 m-4 rounded border-2 hover:border-primary-focus bg-white'>
        <figure className="relative p-5 mb-5 w-40 h-40 self-center">
          <Image
            src={emiCalculatorImage}
            layout="fill"
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
              <FontAwesomeIcon
                icon={faLink}
                size="xs"
                className="w-5 mr-2 inline text-primary"
              />
              EMI Calculator
            </a>
          </h2>
          <p className="p-4">
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
  </>;
};
