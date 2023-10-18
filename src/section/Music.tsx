import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "../components/Image";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import useObserver from "../hooks/useObserver";

const Music = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { setColor } = useBackgroundColor();
  useObserver(targetRef, () => {
    if (setColor) setColor("bg-music-background");
  });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const spotifyFrameOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.6, 0.85],
    [0, 1, 1, 0]
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.6, 0.85],
    [0, 1, 1, 0]
  );

  const lgImageOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.85],
    [0, 1, 1, 0]
  );
  const smImageOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.6, 0.85],
    [0, 1, 1, 0]
  );

  const lgImageYTranslate = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.8],
    [10, 0, -20]
  );
  const smImageYTranslate = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.8],
    [10, 0, -20]
  );

  return (
    <section ref={targetRef} className="relative h-[650vh]">
      <div ref={observerRef} aria-hidden></div>
      <div className="sticky top-0 left-0 h-[100vh] -mx-8 px-8 py-16 flex space-x-4 min-h-screen">
        <motion.div
          style={{ opacity: spotifyFrameOpacity }}
          className="w-full flex flex-col space-y-3 z-10"
        >
          <iframe
            className="w-full h-full "
            src="https://open.spotify.com/embed/playlist/4ryYzKQi6IlIkrk1EezPwP?utm_source=generator&theme=0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </motion.div>
        <div className="relative w-3/5 flex flex-col justify-end">
          <motion.div
            style={{ opacity: titleOpacity }}
            className="flex flex-col space-y-4"
          >
            <h2 className="text-music-headline text-4xl tracking-tight font-bold">
              What we’ve listened together 📻
            </h2>
            <p className="text-music-paragraph font-light">
              I curated a playlist back when u were in need for some nice
              words, I hope that it can always be a reminder for you even the
              weather seems gloom 💞
            </p>
          </motion.div>

          <Image
            src="images/music/music-1.webp"
            alt="music-1"
            size="lg"
            className="-top-10 -left-10 h-[240px]"
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

          <Image
            src="images/music/music-2.webp"
            alt="music-2"
            size="sm"
            className="bottom-[40%] right-0 h-[100px]"
            style={[
              {
                stylePropName: "opacity",
                styleMotionValue: smImageOpacity,
              },
              {
                stylePropName: "y",
                styleMotionValue: smImageYTranslate,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Music;
