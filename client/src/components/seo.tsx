import { useEffect } from 'react';

const Seo = ({ seo }: any) => {
  const defaultSeo: any = {};
  const siteName = 'Aravin.net';
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: seoWithDefaults.shareImage || defaultSeo.shareImage || '',
  };

  useEffect(() => {
    if (fullSeo.metaTitle) {
      document.title = fullSeo.metaTitle;
    }
    if (fullSeo.metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', fullSeo.metaDescription);
    }
  }, [fullSeo.metaTitle, fullSeo.metaDescription]);

  return null;
};

export default Seo;
