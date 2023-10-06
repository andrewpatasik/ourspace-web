import Image from "../components/Image";

const Closing = () => {
  return (
    <div className="relative -mx-8 px-8 pt-[100px] bg-closing-background flex flex-col justify-center min-h-screen">
      <div className="w-1/3 flex flex-col space-y-3">
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
          className="inset-x-1/3 inset-y-64 w-[500px] h-[260px]"
        />
      </div>
      <footer className="absolute right-0 bottom-0 p-8">
        <p className="text-closing-links">Made with ❤️ by Andrew</p>
      </footer>
    </div>
  );
};

export default Closing;
