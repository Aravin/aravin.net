import { faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PROJECTS_DATA = [
  {
    title: 'ResumeVita.com',
    link: 'https://www.resumevita.com',
    image: '/projects/resumevita-com.png',
    description: 'Open Source Resume Generator',
    tags: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'Vercel'],
  },
  {
    title: 'Locful.com',
    link: 'http://locful.com/',
    image: '/projects/locful.png',
    description: 'Your trusted marketplace for buying and selling in India',
    tags: ['SvelteKit', 'Marketplace', 'Web App'],
  },
  {
    title: 'ServiceBird.in',
    link: 'https://st-air-zone.vercel.app/',
    image: '/projects/servicebird.png',
    description: 'Local Home Appliance Service Company in Chennai',
    tags: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'Vercel'],
  },
  {
    title: 'Tamilnative',
    link: 'https://tamil-native.vercel.app/',
    image: '/projects/tamilnative.png',
    description:
      'Effortlessly ship your goods from Tamil Nadu to global destinations with our comprehensive logistics solutions',
    tags: ['Next.js', 'TypeScript', 'Zoho CRM'],
  },
  {
    title: 'epix.io',
    link: 'https://next-epix-8gfvniujv-aravin.vercel.app/#',
    image: '/projects/epix.io.png',
    description: 'Upcoming open source project with everyday tools and services',
    tags: ['Angular.js', 'TypeScript', 'Docker', 'Firebase'],
  },
  {
    title: 'FrontlineCourier.com',
    link: 'https://www.frontlinecourier.com',
    image: '/projects/frontline-courier.png',
    description:
      'Courier company website with client and admin portal with end-to-end solution from booking to tracking the courier.',
    tags: ['Angular.js', 'TypeScript', 'Firebase'],
  },
  {
    title: 'SIP Calculator',
    link: 'https://play.google.com/store/apps/details?id=io.epix.sip',
    image: '/projects/sip-calculator.png',
    description: 'SIP, SWP, STP and Lumpsum returns Calculator Android App',
    tags: ['Flutter', 'Android'],
  },
  {
    title: 'Warranty Manager',
    link: 'https://play.google.com/store/apps/details?id=io.epix.warranty_manager',
    image: '/projects/warranty-manager.jpg',
    description: 'Android application to manage your product or service warranty',
    tags: ['Flutter', 'Android'],
  },
  {
    title: 'EMI Calculator',
    link: 'https://play.google.com/store/apps/details?id=io.epix.emi',
    image: '/projects/emi-calculator.png',
    description: 'Android application to calculate the Loan EMI and Compare Loans',
    tags: ['Flutter', 'Android'],
  },
  {
    title: 'Warranty Manager Cloud',
    link: 'https://play.google.com/store/apps/details?id=net.aravin.warranty_manager_cloud',
    image: '/projects/warranty-manager-cloud.png',
    description: 'Android application to manage your product or service warranty in the cloud',
    tags: ['Flutter', 'Android'],
  },
];

// Helper to generate dynamic colors for tags
const getTagColor = (tagName: string) => {
  const colors = [
    '#ef4444', // red-500
    '#f97316', // orange-500
    '#eab308', // yellow-500
    '#22c55e', // green-500
    '#0ea5e9', // sky-500
    '#3b82f6', // blue-500
    '#6366f1', // indigo-500
    '#a855f7', // purple-500
    '#ec4899', // pink-500
  ];
  let hash = 0;
  for (let i = 0; i < tagName.length; i++) {
    hash = tagName.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  return colors[hash % colors.length];
};

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 sm:px-8 max-w-screen-2xl mx-auto py-10">
      {PROJECTS_DATA.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary cursor-pointer"
        >
          <div className="relative h-56 w-full overflow-hidden bg-gray-50 flex items-center justify-center p-6">
            <img
              src={project.image}
              alt={project.title}
              className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow-md flex items-center gap-2">
                  Visit Site <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faLink} size="sm" className="text-primary opacity-70" />
              {project.title}
            </h2>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm"
                  style={{ backgroundColor: getTagColor(tag) }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
