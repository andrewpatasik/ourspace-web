import Image from "../components/Image";

const Gallery = () => {
  return (
    <div className="-mx-8 px-8 py-[100px] bg-stuff-background flex space-x-12">
      <div className="w-2/4 flex flex-col space-y-3">
        <h2 className="text-history-headline tracking-tight text-4xl font-bold">
          I collect ur amazing drawing 🎨
        </h2>
        <p className="text-history-subheadline font-light">
          So you can see that how talented you are
          <br />
          and may you always realized that 👍🏼 ✨
        </p>
      </div>
      <div className="relative w-9/12 grid grid-cols-3 gap-3">
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>
        <div className="bg-gray-300 rounded-lg w-full z-10 h-32"></div>

        <Image
          src="images/drawing/drawing-1.webp"
          alt="drawing-1"
          size="lg"
          className="-bottom-20 -left-32 w-[200px] h-[260px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Gallery;
