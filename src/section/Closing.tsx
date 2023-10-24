import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "../components/Image";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import useObserver from "../hooks/useObserver";
import Emoji from "../components/Emoji";

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

  const titleOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const lgImageOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <section ref={targetRef} className="relative h-[150vh] -mx-8 px-8">
      <div className="sticky top-0 left-0 h-[100vh] flex flex-col justify-center">
        <motion.div style={{ opacity: titleOpacity }} ref={titleRef} className="flex flex-col grow justify-center space-y-3">
          <p className="text-xl text-closing-paragraph font-light">
            And that’s it! I hope u like this small present
          </p>
          <h2 className="text-closing-headline tracking-tight text-5xl font-bold">
            Happy Birthday <Emoji src="cake" className="w-12 mx-1" align="align-bottom"/><Emoji src="teddy-bear" className="w-12 mx-1" align="align-bottom"/>
          </h2>
          <p className="text-xl text-closing-paragraph font-light">
            from your biggest fan,
          </p>
        </motion.div>
        <Image
          src="images/closing/closing-1.webp"
          alt="closing-1"
          size="md"
          className="w-[45%] h-[280px] right-0"
          style={[
            {
              stylePropName: "opacity",
              styleMotionValue: lgImageOpacity
            }
          ]}
        />
        <footer className="flex justify-end p-4">
          <p className="text-md text-closing-paragraph font-light">
            Dev with <span className="text-closing-links">❤</span>️ by andrew
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Closing;
