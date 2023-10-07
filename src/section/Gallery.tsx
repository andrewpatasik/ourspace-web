import { useRef } from "react";
import Image from "../components/Image";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import useObserver from "../hooks/useObserver";

const Gallery = () => {
  const { setColor } = useBackgroundColor();
  const titleRef = useRef<HTMLDivElement | null>(null);
  useObserver(titleRef, () => {
    if (setColor) setColor("bg-stuff-background");
  });

  return (
    <div className="-mx-8 px-8 py-[100px] flex space-x-12">
      <div ref={titleRef} className="w-2/4 flex flex-col space-y-3">
        <h2 className="text-history-headline tracking-tight text-4xl font-bold">
          I collect ur amazing drawing 🎨
        </h2>
        <p className="text-history-subheadline font-light">
          So you can see that how talented you are
          <br />
          and may you always realized that 👍🏼 ✨
        </p>
      </div>
      <div className="relative w-9/12 grid grid-cols-3 gap-3">
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>

        <Image
          src="images/drawing/drawing-1.webp"
          alt="drawing-1"
          size="lg"
          className="-bottom-20 -left-32 w-[200px] h-[260px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Gallery;
