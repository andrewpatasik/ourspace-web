import { useScroll, useTransform, motion } from "framer-motion";
import { FC, useRef } from "react";

interface ImageProps {
  src: string;
  alt: string;
  size: string;
  className?: string;
  loading?: "eager" | "lazy" | undefined;
}

interface rectSizeProps {
  [key: string]: [number | string, number | string];
}

const animateObject = {
  initial: 0,
  smStart: 0.45,
  smEnd: 0.5,
  mdStart: 0.45,
  mdEnd: 0.5,
  lgStart: 0.25,
  lgEnd: 0.35,
};

const Image: FC<ImageProps> = ({
  src,
  alt,
  size,
  className,
  loading = "eager",
}: ImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });

  const animateSize: any = {
    sm: useTransform(
      scrollYProgress,
      [animateObject.smStart, animateObject.smEnd],
      [1, 0]
    ),
    md: useTransform(
      scrollYProgress,
      [animateObject.mdStart, animateObject.mdEnd],
      [1, 0]
    ),
    lg: useTransform(
      scrollYProgress,
      [animateObject.lgStart, animateObject.lgEnd],
      [1, 0]
    ),
  };

  const rectSize: rectSizeProps = {
    sm: [130, "auto"],
    md: [500, "auto"],
    lg: [160, "auto"],
  };

  return (
    <motion.img
      ref={imageRef}
      style={{ opacity: animateSize[size] }}
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
