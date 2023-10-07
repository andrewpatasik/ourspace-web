import { useRef } from "react";
import Image from "../components/Image";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import useObserver from "../hooks/useObserver";

const Music = () => {
  const { setColor } = useBackgroundColor();
  const titleRef = useRef<HTMLDivElement | null>(null);
  useObserver(titleRef, () => {
    if (setColor) setColor("bg-music-background");
  });

  return (
    <div className="-mx-8 px-8 py-16 flex space-x-4 min-h-screen">
      <div ref={titleRef} className="w-full flex flex-col space-y-3 z-10">
        <iframe
          className="w-full h-full "
          src="https://open.spotify.com/embed/playlist/4ryYzKQi6IlIkrk1EezPwP?utm_source=generator&theme=0"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="relative w-3/5 flex flex-col justify-end">
        <div className="flex flex-col space-y-4">
          <h2 className="text-music-headline text-4xl tracking-tight font-bold">
            What we’ve listened together 📻
          </h2>
          <p className="text-music-paragraph font-light">
            Sometimes words cannot express our feelings so we looking for music
            that can express it 💞
          </p>
        </div>

        <Image
          src="images/music/music-1.webp"
          alt="music-1"
          size="lg"
          className="-top-10 -left-10 h-[240px]"
          loading="lazy"
        />

        <Image
          src="images/music/music-2.webp"
          alt="music-2"
          size="sm"
          className="bottom-[35%] right-0 h-[100px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Music;
