import { getStrapiMedia } from '../lib/media';
import NextImage from "next/image";

const Image = ({ image }: any) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      width={width || '100%'}
      height={height || '100%'}
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }} />
  );
};

export default Image;
