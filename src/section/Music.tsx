import Image from "../components/Image";

const Music = () => {
  return (
    <div className="-mx-8 px-8 py-16 bg-music-background flex space-x-12 min-h-screen">
      <div className="w-4/5 flex flex-col space-y-3 z-10">
        <iframe
          className=""
          src="https://open.spotify.com/embed/playlist/4ryYzKQi6IlIkrk1EezPwP?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="relative flex flex-col justify-end">
        <div className="flex flex-col space-y-4">
          <h2 className="text-music-headline text-4xl font-bold">
            What we’ve listened
            <br />
            together 📻
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
          className="-top-10 -left-20 h-[270px]"
        />

        <Image
          src="images/music/music-2.webp"
          alt="music-2"
          size="sm"
          className="inset-y-2/3 right-0 h-[120px]"
        />
      </div>
    </div>
  );
};

export default Music;
