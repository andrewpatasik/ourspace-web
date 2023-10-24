import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "../components/Image";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import useObserver from "../hooks/useObserver";
import Emoji from "../components/Emoji";

const Gallery = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.75, 0.8],
    [0, 1, 1, 0]
  );
  const lgImageOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  const lgImageYTranslate = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.8],
    [10, 0, -20]
  );

  const { setColor } = useBackgroundColor();
  useObserver(targetRef, () => {
    if (setColor) setColor("bg-stuff-background");
  });

  return (
    <section ref={targetRef} className="relative h-[450vh]">
      <motion.div
        style={{ opacity }}
        className="sticky top-0 left-0 pt-[100px] -mx-8 px-8 flex space-x-12"
      >
        <div className="w-2/4 flex flex-col space-y-3">
          <div ref={observerRef} aria-hidden></div>
          <h2 className="text-history-headline tracking-tight text-5xl font-bold">
            I collect ur amazing drawing <Emoji src="artist-pallete" className="w-10" align="align-baseline" />
          </h2>
          <p className="text-history-subheadline text-xl font-light">
            So you can see that how talented you are
            <br />
            and may you always realized that <Emoji src="thumbs-up"  className="mx-1"/> <Emoji src="sparkles"  className="mx-1"/>
          </p>
        </div>
        <div className="relative w-9/12 grid grid-cols-3 gap-3">
          <img
            src="images/drawing/gallery-1.webp"
            alt="gallery-1"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-2.webp"
            alt="gallery-2"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-3.webp"
            alt="gallery-3"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-4.webp"
            alt="gallery-4"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-5.webp"
            alt="gallery-5"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-6.webp"
            alt="gallery-6"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-7.webp"
            alt="gallery-7"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-8.webp"
            alt="gallery-8"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />
          <img
            src="images/drawing/gallery-9.webp"
            alt="gallery-9"
            className="w-full h-36 rounded-lg z-10 object-cover"
            loading="lazy"
            width={161}
            height={128}
          />

          <Image
            src="images/drawing/drawing-1.webp"
            alt="drawing-1"
            size="lg"
            className="-bottom-20 -left-32 w-[200px] h-[300px]"
            style={[
              {
                stylePropName: "opacity",
                styleMotionValue: lgImageOpacity,
              },
              {
                stylePropName: "y",
                styleMotionValue: lgImageYTranslate,
              },
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
