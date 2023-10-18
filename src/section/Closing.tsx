import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "../components/Image";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import useObserver from "../hooks/useObserver";

const Closing = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { setColor } = useBackgroundColor();
  useObserver(targetRef, () => {
    if (setColor) setColor("bg-closing-background");
  });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    [0, 1]
  );
  const lgImageOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.5],
    [0, 1]
  );

  return (
    <section ref={targetRef} className="relative vh-[400vh] -mx-8 px-8">
      <motion.div style={{opacity}} className="sticky top-0 left-0 h-[100vh] flex flex-col justify-center">
        <div ref={titleRef} className="flex flex-col space-y-3">
          <p className="text-closing-paragraph font-light">
            And that’s it! from my deepest heart I’d like to say:
          </p>
          <h2 className="text-closing-headline tracking-tight text-4xl font-bold">
            Happy Birthday 🎂🧸
          </h2>
          <p className="text-closing-paragraph font-light">
            from your biggest fan,
          </p>
          <Image
            src="images/closing/closing-1.webp"
            alt="closing-1"
            size="md"
            className="right-8 inset-y-1/3 w-[45%] h-[240px]"
            style={[
              {
                stylePropName: "opacity",
                styleMotionValue: lgImageOpacity,
              },
            ]}
          />
        </div>
        <footer className="absolute right-0 bottom-0 p-4">
          <p className="text-sm">
            Made with <span className="text-closing-links">❤</span>️ by Andrew
          </p>
        </footer>
      </motion.div>
    </section>
  );
};

export default Closing;
