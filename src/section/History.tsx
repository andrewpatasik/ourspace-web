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

const chatRecord = [
  {
    name: "Gres",
    message: "Cool! Do you have any interesting projects you're working on?",
  },
  {
    name: "Andrew",
    message:
      "Yeah, I'm currently designing a logo for a new startup. It's challenging but fun!",
  },
  {
    name: "Gres",
    message: " I appreciate that! Let's stay connected. Have a great day!",
  },
  {
    name: "Andrew",
    message: "You too! Chat with you later! 👋",
  },
];

const History = () => {
  const [chatMessage, setChatMessage] = useState<
    {
      name: string;
      message: string;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const totalItems = chatRecord.length;
  const itemsPerPage = 2;
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const controls = useAnimation();
  const titleOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.65, 0.75], [0, 1, 1, 0]);
  const chatOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.65, 0.75], [0, 1, 1, 0]);

  const { setColor } = useBackgroundColor();
  useObserver(observerRef, () => {
    if (setColor) setColor("bg-history-background");
  });

  useEffect(() => {
    controls.start({ opacity: 0, y: -10 }).then(() => {
      setChatMessage(chatRecord.slice(startIndex, endIndex));
      controls.start({ opacity: 1, y: 0 });
    });

    const chatInterval = setInterval(() => {
      if (currentPage < totalPage) setCurrentPage(currentPage + 1);
      else setCurrentPage(1);
    }, 5000);

    return () => {
      clearInterval(chatInterval);
    };
  }, [currentPage]);

  return (
    <div ref={targetRef} className="relative h-[250vh]">
      <div ref={observerRef} aria-hidden></div>
      <div className="sticky top-0 left-0 -mx-8 px-8 pt-[100px] flex h-[100vh]">
        <div className="w-3/5 flex flex-col space-y-3">
          <motion.h2
            style={{ opacity: titleOpacity }}
            className="text-history-headline text-4xl font-bold"
          >
            👫Our History
          </motion.h2>
          <motion.p
            style={{ opacity: titleOpacity }}
            className="text-history-subheadline font-light"
          >
            Do you remember the first time we talked? It’s been a while ago, but
            since then we already share <span className="font-bold">30795</span>{" "}
            texts, <span className="font-bold">1533</span> funny selfie
            (including memes ofc 😆) and <span className="font-bold">217</span>{" "}
            random videos. We share memories, emotions and dreams.
          </motion.p>
        </div>
        <motion.div
          style={{ opacity: chatOpacity }}
          className="relative flex flex-col w-full mt-24 space-y-8"
        >
          <AnimatePresence>
            <div className="w-11/12 mx-auto space-y-8 z-10">
              {chatMessage.map(({ name, message }, index) => {
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
                      name={name}
                      message={message}
                      className={(index + 1) % 2 == 0 ? "ml-auto" : ""}
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
            className="top-10 -left-20 h-[240px]"
            loading="lazy"
          />
          <Image
            src="images/history/history-1.webp"
            alt="history-3"
            size="sm"
            className="-top-24 inset-x-2/3 h-[100px]"
            loading="lazy"
          />
          <Image
            src="images/history/history-2.webp"
            alt="history-2"
            size="lg"
            className="inset-y-1/3 -right-5 h-[240px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default History;
