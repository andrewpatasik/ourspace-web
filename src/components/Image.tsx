import { FC } from "react";

interface ImagePros {
  src: string;
  alt: string;
  size: string;
  className?: string;
  loading?: "eager" | "lazy" | undefined;
}

interface rectSizeProps {
  [key: string]: [number | string, number | string];
}

const Image: FC<ImagePros> = ({
  src,
  alt,
  size,
  className,
  loading = "eager",
}: ImagePros) => {
  const rectSize: rectSizeProps = {
    sm: [150, "auto"],
    md: [50, "auto"],
    lg: [180, "auto"],
  };

  return (
    <img
      src={src}
      alt={alt}
      width={rectSize[size][0]}
      height={rectSize[size][1]}
      className={`absolute object-cover max-w-full bg-gray-100 rounded-3xl ${className}`}
      loading={loading}
    />
  );
};

export default Image;
