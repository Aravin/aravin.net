import { getStrapiMedia } from '../lib/media';
import NextImage from 'next/image';

const Image = ({ image }) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      wwidth={width || '100%'}
      height={height || '100%'}
      oobjectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
