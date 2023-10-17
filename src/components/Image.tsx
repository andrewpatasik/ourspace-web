import { motion, MotionValue } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import useObserver from "../hooks/useObserver";

interface ImageProps {
  src: string;
  alt: string;
  size: string;
  style?: StyleType[];
  className?: string;
  loading?: "eager" | "lazy" | undefined;
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
  sm: [130, "auto"],
  md: [500, "auto"],
  lg: [160, "auto"],
};

const imagePlaceholder: imagePlaceholderProps = {
  sm: `https://placehold.co/${rectSize.sm[0]}`,
  lg: `https://placehold.co/${rectSize.lg[0]}`,
};

const Image: FC<ImageProps> = ({
  src,
  alt,
  size,
  className,
  loading = "eager",
  style,
}: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [isImageVisible] = useObserver(imageRef);

  useEffect(() => {
    const loadImage = async () => {
      try {
        let IMAGE_URL = `../assets/${src}`;
        const image = await import(IMAGE_URL);

        return image.default;
      } catch (error) {
        return imagePlaceholder[size];
      }
    };

    if (!loaded) {
      loadImage()
        .then((img) => {
          if (img) {
            imageRef.current?.classList.add("transition");
            imageRef.current?.classList.add("duration-300");
            imageRef.current?.classList.add("ease-in-out");

            if (imageRef.current) imageRef.current.src = img;
          }
        })
        .finally(() => {
          imageRef.current?.classList.remove("blur-md");
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
      className={`absolute blur-md object-cover max-w-full bg-gray-100 rounded-xl ${className}`}
      loading={loading}
    />
  );
};

export default Image;
