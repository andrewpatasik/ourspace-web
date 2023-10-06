import Button from "../components/Button";
import { ButtonClickProps } from "./section";

const handleButtonClick: ButtonClickProps = (e) => {
  console.log(e.currentTarget.name);
};

const Timer = () => {
  return (
    <div className="-mx-8 px-8 bg-history-background flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl font-medium mb-8">
        we’ve been spent time together for...
      </p>
      <div className="relative w-full xl:w-9/12 flex flex-col">
        <div className="text-center mx-auto flex font-bold justify-around">
          <div className="w-36">
            <h2 className="text-9xl font-bold">0</h2>
            <p className="text-3xl">Days</p>
          </div>
          <div className="w-36">
            <h2 className="text-9xl font-bold">0</h2>
            <p className="text-3xl">Hours</p>
          </div>
          <div className="w-36">
            <h2 className="text-9xl font-bold">0</h2>
            <p className="text-3xl">Minutes</p>
          </div>
          <div className="w-36">
            <h2 className="text-9xl font-bold">0</h2>
            <p className="text-3xl">Seconds</p>
          </div>
        </div>
        <Button name="convetti-left" onClickEvt={handleButtonClick} className="absolute text-9xl top-10">
          <span>🎉</span>
        </Button>
        <Button name="convetti-right" onClickEvt={handleButtonClick} className="absolute text-9xl -scale-x-1 right-0 top-10">
          <span>
            🎉
          </span>
        </Button>
      </div>
      <p className="mt-12">And it still counting 🌱</p>
    </div>
  );
};

export default Timer;
