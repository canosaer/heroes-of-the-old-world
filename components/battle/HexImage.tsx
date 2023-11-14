import { Image } from 'react-konva';
import useImage from 'use-image';

interface HexImageProps {
    imageSource: string;
    x: number;
    y: number;
}

const HexImage: React.FC<HexImageProps> = ({ imageSource, x, y }) => {

  // Ensure that useImage is called unconditionally
  const [image] = useImage(imageSource || ''); // Use .src to get the URL

  if (!imageSource || !image) {
    // Handle the case when the image source or image is not available
    return null;
  }

  return <Image image={image} x={x} y={y} alt="" />;
};

export default HexImage;