import { useRef } from "react";
import Image from "../components/Image";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const headlineTranslateY = useTransform(scrollYProgress, [0.85, 0.95], ["0rem", "-1rem"]);
  const paragraphTranslateY = useTransform(scrollYProgress, [0.95, 1], ["0rem", "-1rem"]);

  return (
    <section className="relative h-[200vh]">
      <div className="fixed -mx-4 sm:-mx-8 px-4 sm:px-8 h-[100vh] flex flex-col">
        <header className="w-full sm:w-9/12 pb-6 flex-1 mx-auto flex flex-col items-center justify-end sm:text-center space-y-4 z-10">
          <motion.h1
            ref={targetRef}
            style={{ opacity, y: headlineTranslateY }}
            className="text-5xl sm:text-7xl xl:text-9xl text-hero-headline tracking-thighter leading-tight sm:leading-none font-black"
          >
            Hey, U Turned 23 Today 🎉
          </motion.h1>
          <motion.p
            ref={targetRef}
            style={{ opacity,  y: headlineTranslateY}}
            className="w-full sm:w-11/12 xl:w-8/12 text-hero-subheadline text-xl sm:text-xl tracking-tight leading-relaxed sm:leading-normal xl:leading-none"
          >
            I made this as a rectrospective of our relationship in hope that we
            can have a little space in the internet that stored everything we
            love and have been shared together, I hope you like it 😊
          </motion.p>
        </header>

        <Image
          src="images/hero/hero-1.webp"
          alt="hero-1"
          size="lg"
          className="-bottom-12 sm:bottom-0 -left-14 sm:h-[200px] xl:h-[260px]"
        />
        <Image
          src="images/hero/hero-2.webp"
          alt="hero-2"
          size="lg"
          className="top-1 right-1 sm:inset-y-24 sm:inset-x-[8.5rem] sm:h-[240px] xl:h-[270px]"
        />
        <Image
          src="images/hero/gif-2.gif"
          alt="gif-2"
          size="sm"
          className="hidden sm:block inset-y-3/4 inset-x-1/4 h-[100px]"
        />

        <Image
          src="images/hero/gif-1.gif"
          alt="gif-1"
          size="lg"
          className="top-10 sm:inset-y-1/5 left-1 sm:inset-x-1/2 h-[220px]"
        />
        <Image
          src="images/hero/hero-3.webp"
          alt="hero-3"
          size="sm"
          className="bottom-10 inset-x-2/3 h-[120px]"
        />
        <Image
          src="images/hero/hero-4.webp"
          alt="hero-4"
          size="lg"
          className="top-20 right-14 h-[200px] z-20"
        />
        <Image
          src="images/hero/hero-5.webp"
          alt="hero-5"
          size="lg"
          className="bottom-0 right-0 h-[200px]"
        />

        <div className="left-0 z-10">
          <motion.p
            ref={targetRef}
            style={{ opacity, y: paragraphTranslateY }}
            className="text-xl sm:text-2xl text-hero-paragraph font-semibold"
          >
            So Where It
            <br />
            All Started? 👀
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
