const Music = () => {
  return (
    <div className="-mx-8 px-8 py-16 bg-music-background flex space-x-12 min-h-screen">
      <div className="w-4/5 flex flex-col space-y-3">
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
      <div className="relative h-full mt-auto">
        <div className="pl-12 flex flex-col space-y-4">
          <h2 className="text-music-headline text-4xl font-bold">
            What we’ve listened together 📻
          </h2>
          <p className="text-music-paragraph font-light">
            Sometimes words cannot express our feelings so we looking for music
            that can express it 💞
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;
