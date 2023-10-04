import ChatBubble from "../components/ChatBubble";
import Image from "../components/Image";

const History = () => {
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

  return (
    <div className="-mx-8 px-8 pt-[150px] bg-history-background flex min-h-screen">
      <div className="w-2/5 flex flex-col space-y-3">
        <h2 className="text-history-headline text-4xl font-bold">
          👫Our History
        </h2>
        <p className="text-history-subheadline">
          Do you remember the first time we talked? It’s been a while ago, but
          since then we already share <span className="font-bold">30795</span> texts, <span className="font-bold">1533</span> funny selfie (including
          memes ofc 😆) and <span className="font-bold">217</span> random videos. We share memories, emotions and
          dreams.
        </p>
      </div>
      <div className="relative flex flex-col w-full space-y-8">
        <div className="w-2/3 mx-auto pl-12 space-y-8 z-10">
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
          src="/src/assets/images/history/history-4.webp"
          alt="history-4"
          size="lg"
          className="top-10 inset-x-28 h-[260px]"
        />
        <Image
          src="/src/assets/images/history/history-1.webp"
          alt="history-3"
          size="sm"
          className="-top-10 inset-x-2/3 h-[110px]"
        />
        <Image
          src="/src/assets/images/history/history-2.webp"
          alt="history-2"
          size="lg"
          className="inset-y-1/4 right-10 h-[260px]"
        />
      </div>
    </div>
  );
};

export default History;
