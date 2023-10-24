import { motion, MotionValue } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import useObserver from "../hooks/useObserver";

interface ImageProps {
  src: string;
  alt: string;
  size: string;
  style?: StyleType[];
  className?: string;
}

interface rectSizeProps {
  [key: string]: [number | string, number | string];
}

interface imagePlaceholderProps {
  [key: string]: string;
}

type StyleType = {
  stylePropName: string;
  styleMotionValue: MotionValue<number>;
};

const rectSize: rectSizeProps = {
  sm: [160, "auto"],
  md: [500, "auto"],
  lg: [200, "auto"],
};

const imagePlaceholder: imagePlaceholderProps = {
  sm: `https://placehold.co/${rectSize.sm[0]}/F1F5F9/F1F5F9`,
  lg: `https://placehold.co/${rectSize.lg[0]}/F1F5F9/F1F5F9`,
};

const Image: FC<ImageProps> = ({
  src,
  alt,
  size,
  className,
  style,
}: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [isImageVisible] = useObserver(imageRef);

  useEffect(() => {
    const loadImage = async () => {
      try {
        let IMAGE_URL = `/${src}`;
        const image = IMAGE_URL;

        return image;
      } catch (error) {
        return imagePlaceholder[size];
      }
    };

    if (isImageVisible && !loaded) {
      loadImage()
        .then((img) => {
          if (imageRef.current) imageRef.current.src = img;
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }, [isImageVisible]);

  const injectStyleClassName = (style: ImageProps["style"]) => {
    return (
      style &&
      style.reduce((collection, currentItem) => {
        return {
          ...collection,
          [currentItem.stylePropName]: currentItem.styleMotionValue,
        };
      }, {})
    );
  };

  return (
    <motion.img
      ref={imageRef}
      style={injectStyleClassName(style)}
      src={imagePlaceholder[size]}
      alt={alt}
      width={rectSize[size][0]}
      height={rectSize[size][1]}
      className={`absolute object-cover max-w-full bg-gray-100 rounded-xl ${className}`}
    />
  );
};

export default Image;
