import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import ChatBubble from "../components/ChatBubble";
import Image from "../components/Image";
import useObserver from "../hooks/useObserver";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import chatRec from "../data/chat.json";
import Emoji from "../components/Emoji";

const History = () => {
  const [chatMessage, setChatMessage] = useState<
    {
      sender: string;
      message: string;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const totalItems = chatRec.length;
  const itemsPerPage = 2;
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const controls = useAnimation();
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.65, 0.8],
    [0, 1, 1, 0]
  );
  const chatOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.43, 0.65, 0.8],
    [0, 1, 1, 0]
  );

  const { setColor } = useBackgroundColor();
  const [isVisible] = useObserver(targetRef, () => {
    if (setColor) setColor("bg-history-background");
  });

  useEffect(() => {
    controls.start({ opacity: 0, y: -10 }).then(() => {
      setChatMessage(chatRec.slice(startIndex, endIndex));
      controls.start({ opacity: 1, y: 0 });
    });

    const chatInterval: ReturnType<typeof setInterval> = setInterval(() => {
      if (currentPage < totalPage) setCurrentPage((prev) => prev + 1);
      else setCurrentPage(1);
    }, 5000);

    if (!isVisible) {
      controls.stop();
      clearInterval(chatInterval);
      setCurrentPage(1);
    }

    return () => {
      clearInterval(chatInterval);
    };
  }, [currentPage, isVisible]);

  return (
    <div ref={targetRef} className="relative h-[400vh]">
      <div ref={observerRef} aria-hidden></div>
      <div className="sticky top-0 left-0 -mx-8 px-8 pt-[100px] flex h-[100vh]">
        <div className="w-3/4 flex flex-col space-y-3">
          <motion.h2
            style={{ opacity: titleOpacity }}
            className="text-history-headline text-5xl font-bold"
          >
            <Emoji src="holding-hands" className="w-8 mr-4" align="align-baseline" />The Story So Far...
          </motion.h2>
          <motion.p
            style={{ opacity: titleOpacity }}
            className="text-history-subheadline text-xl font-light pr-12"
          >
            Do you remember the first time we talked? It’s been a while ago for sure <Emoji src="face-sweat" />, but
            since then we already share <span className="font-bold">30795</span>{" "}
            texts, <span className="font-bold">1533</span> funny selfie
            (including memes ofc <Emoji src="smiling-closing-eyes" />) and <span className="font-bold">217</span>{" "}
            random videos. And then, on April 30th 2023 we finally choose to be together.
          </motion.p>
        </div>
        <motion.div
          style={{ opacity: chatOpacity }}
          className="relative flex flex-col w-full mt-32 space-y-8"
        >
          <AnimatePresence>
            <div className="w-11/12 mx-auto space-y-8 z-10">
              {chatMessage.map(({ sender, message }, index) => {
                return (
                  <motion.div
                    key={index}
                    animate={controls}
                    transition={
                      index === 0 ? { duration: 0.3 } : { duration: 0.75 }
                    }
                  >
                    <ChatBubble
                      key={index}
                      name={sender}
                      message={message}
                      className={
                        (index + 1) % 2 == 0 ? "ml-auto" : ""
                      }
                    />
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>

          <Image
            src="images/history/history-4.webp"
            alt="history-4"
            size="lg"
            className="top-0 -left-10 h-[300px]"
          />
          <Image
            src="images/history/history-1.webp"
            alt="history-3"
            size="sm"
            className="-top-32 inset-x-2/3 h-[120px]"
          />
          <Image
            src="images/history/history-2.webp"
            alt="history-2"
            size="lg"
            className="top-32 -right-5 h-[300px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default History;
