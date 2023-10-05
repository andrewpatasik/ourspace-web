import Image from "../components/Image";

const Hero = () => {
  return (
    <div className="-mx-8 px-8 relative bg-hero-background h-screen flex flex-col">
      <header className="w-10/12 pb-6 flex-1 mx-auto flex flex-col items-center justify-end text-center space-y-4 z-10">
        <h1 className="text-9xl text-hero-headline tracking-thighter font-black">
          Hey, U Turned 23 Today 🎉
        </h1>
        <p className="w-8/12 text-hero-subheadline text-2xl tracking-tight">
          I made this as a rectrospective of our relationship in hope that we
          can have a little space in the internet that stored everything we love
          and have been shared together, I hope you like it 😊
        </p>
      </header>
      {/* left */}
      <Image
        src="/src/assets/images/hero/hero-1.webp"
        alt="hero-1"
        size="lg"
        className="bottom-0 -left-14 h-[260px]"
      />
      <Image
        src="/src/assets/images/hero/hero-2.webp"
        alt="hero-2"
        size="lg"
        className="inset-y-[5rem] inset-x-[12.5rem] w-[270px] h-[220px] rotate-90"
      />
      <Image
        src="/src/assets/images/hero/gif-2.gif"
        alt="gif-2"
        size="sm"
        className="inset-y-2/3 inset-x-1/4 h-[120px]"
      />
      {/* right */}
      <Image
        src="/src/assets/images/hero/gif-1.gif"
        alt="gif-1"
        size="lg"
        className="inset-y-0 inset-x-1/2 h-72"
      />
      <Image
        src="/src/assets/images/hero/hero-3.webp"
        alt="hero-3"
        size="sm"
        className="inset-y-2/3 inset-x-2/3 h-[120px]"
      />
      <Image
        src="/src/assets/images/hero/hero-4.webp"
        alt="hero-4"
        size="lg"
        className="top-8 right-20 h-[270px] z-20"
      />
      <Image
        src="/src/assets/images/hero/hero-5.webp"
        alt="hero-5"
        size="lg"
        className="bottom-0 right-0 w-[180px] h-[260px]"
      />

      <div className="left-0 z-10">
        <p className="text-2xl text-hero-paragraph font-semibold">
          So Where It<br/>All Started? 👀
        </p>
      </div>
    </div>
  );
};

export default Hero;
