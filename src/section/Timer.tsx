import {
  useScroll,
  useTransform,
  useAnimate,
  motion,
  useMotionValue,
} from "framer-motion";
import ReactConfetti from "react-confetti";
import Button from "../components/Button";
import { ButtonClickProps } from "./section";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import useObserver from "../hooks/useObserver";

const startTime = moment(new Date("2022-12-01T14:02:43"));
const currentTime = moment(new Date());
const dayRelativeTime = currentTime.diff(startTime, "days");

const Timer = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const [isConfettiOn, setIsConfettiOn] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  const [scope, animate] = useAnimate();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useObserver(countRef, () => {
    animate(count, dayRelativeTime, { duration: 1.5, delay: 0.5, velocity: 1 });
  });

  useEffect(() => {
    window.onresize = () => handleWindowResize();
  }, [windowSize, loaded]);

  useEffect(() => {
    setLoaded(true);

  }, []);

  useEffect(() => {
    let confettiTimeout: ReturnType<typeof setTimeout>;

    if (isConfettiOn) {
      confettiTimeout = setTimeout(() => {
        setIsConfettiOn(false);
      }, 3000);
    }

    return () => {
      if (isConfettiOn) {
        clearTimeout(confettiTimeout);
      }
    };
  }, [isConfettiOn]);

  const handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth - 24,
      height: window.innerHeight,
    });
  };

  const handleButtonClick: ButtonClickProps = () => {
    setIsConfettiOn(true);
  };

  return (
    <div ref={targetRef} className="relative h-[250vh]">
      <motion.div
        style={{ opacity }}
        className="sticky top-0 left-0 h-[100vh] -mx-8 px-8 flex flex-col items-center justify-center"
      >
        {loaded && (
          <ReactConfetti
            width={windowSize.width}
            numberOfPieces={150}
            recycle={isConfettiOn}
          />
        )}
        <p className="text-2xl font-medium mb-8 text-center">
          we’ve been spent time together for...
        </p>
        <motion.div ref={scope} className="relative w-9/12 flex flex-col">
          <div className="text-center mx-auto flex font-bold justify-around">
            <div>
              <motion.h2 ref={countRef} className="text-9xl font-bold">
                {rounded}
              </motion.h2>
              <p className="text-3xl">Days</p>
            </div>
          </div>
          <Button
            name="convetti-left"
            onClickEvt={handleButtonClick}
            className="absolute text-9xl top-10 active:opacity-50 active:-translate-y-5 transition"
          >
            <span>🎉</span>
          </Button>
          <Button
            name="convetti-right"
            onClickEvt={handleButtonClick}
            className="absolute text-9xl flip right-0 top-10 active:opacity-50 active:-translate-y-5 transition"
          >
            <span>🎉</span>
          </Button>
        </motion.div>
        <p className="mt-12">And it still counting 🌱</p>
      </motion.div>
    </div>
  );
};

export default Timer;
