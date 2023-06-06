import Link from 'next/link';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function FourOhFour() {
  const seo = {
    metaTitle: '404 - Page Not Found',
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div>
        <div className="text-center mt-10 mb-5">
          <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
        </div>

        <div className="px-5 py-5 mb-5 w-full">
          <Link href="/" className='btn'>
              Go back home
          </Link>

        </div>
      </div>
    </Layout>
  );
}
