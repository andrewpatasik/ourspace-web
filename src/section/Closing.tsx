import Image from "../components/Image";

const Closing = () => {
  return (
    <div className="relative -mx-8 px-8 pt-[100px] bg-closing-background flex flex-col justify-center min-h-screen">
      <div className="flex flex-col space-y-3">
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
          loading="lazy"
        />
      </div>
      <footer className="absolute right-0 bottom-0 p-4">
        <p className="text-sm">Made with <span className="text-closing-links">❤</span>️ by Andrew</p>
      </footer>
    </div>
  );
};

export default Closing;
