import ChevronRightIcon from "../assets/icons/ChevroRightIcon";
import ChevronLeftIcon from "../assets/icons/ChevronLeftIcon";
import Button from "../components/Button";
import ChatBubble from "../components/ChatBubble";
import Image from "../components/Image";
import { ButtonClickProps } from "./section";

const chatRecord = [
  {
    name: "Gres",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Andrew",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo dui, ultricies.",
  },
];

const handleButtonClick:ButtonClickProps = (e) => {
  console.log(e.currentTarget.name)
}


const History = () => {
  return (
    <div className="-mx-8 px-8 pt-[100px] bg-history-background flex min-h-screen">
      <div className="w-3/5 flex flex-col space-y-3">
        <h2 className="text-history-headline text-4xl font-bold">
          👫Our History
        </h2>
        <p className="text-history-subheadline font-light">
          Do you remember the first time we talked? It’s been a while ago, but
          since then we already share <span className="font-bold">30795</span>{" "}
          texts, <span className="font-bold">1533</span> funny selfie (including
          memes ofc 😆) and <span className="font-bold">217</span> random
          videos. We share memories, emotions and dreams.
        </p>
        <div className="flex space-x-4">
          <Button name="left" onClickEvt={handleButtonClick} className="p-4 border rounded-full transition active:bg-white">
            <ChevronLeftIcon />
          </Button>
          <Button name="right" onClickEvt={handleButtonClick} className="p-4 border rounded-full transition active:bg-white">
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="relative flex flex-col w-full mt-24 space-y-8">
        <div className="w-11/12 mx-auto space-y-8 z-10">
          {chatRecord.map(({ name, message }, index) => {
            return (
              <ChatBubble
                key={index}
                name={name}
                message={message}
                className={(index + 1) % 2 == 0 ? "ml-auto" : ""}
              />
            );
          })}
        </div>
        <Image
          src="images/history/history-4.webp"
          alt="history-4"
          size="lg"
          className="top-10 -left-20 h-[240px]"
        />
        <Image
          src="images/history/history-1.webp"
          alt="history-3"
          size="sm"
          className="-top-24 inset-x-2/3 h-[100px]"
        />
        <Image
          src="images/history/history-2.webp"
          alt="history-2"
          size="lg"
          className="inset-y-1/3 -right-5 h-[240px]"
        />
      </div>
    </div>
  );
};

export default History;
