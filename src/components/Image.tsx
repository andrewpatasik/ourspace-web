import { motion, MotionValue } from "framer-motion";
import { FC, useRef } from "react";

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

type StyleType = {
  stylePropName: string;
  styleMotionValue: MotionValue<number>;
};

const rectSize: rectSizeProps = {
  sm: [130, "auto"],
  md: [500, "auto"],
  lg: [160, "auto"],
};

const Image: FC<ImageProps> = ({
  src,
  alt,
  size,
  className,
  loading = "eager",
  style,
}: ImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

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
      src={src}
      alt={alt}
      width={rectSize[size][0]}
      height={rectSize[size][1]}
      className={`absolute object-cover max-w-full bg-gray-100 rounded-xl ${className}`}
      loading={loading}
    />
  );
};

export default Image;
