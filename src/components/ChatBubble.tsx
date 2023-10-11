import { FC } from "react";

interface ChatBubbleProps {
  className?: string;
  name: string;
  message: string;
}

const ChatBubble: FC<ChatBubbleProps> = ({
  className,
  name,
  message,
}: ChatBubbleProps) => {
  return (
    <div
      className={`w-fit max-w-[20rem] flex flex-col space-y-1 bg-white px-[12px] py-[16px] rounded-lg shadow-chatbubble ${className}`}
    >
      <p className={`text-xs font-semibold text-history-headline ${className}`}>
        {name}
      </p>
      <p
        className={`font-light tracking-tight text-history-subheadline leading-snug`}
      >
        {message}
      </p>
    </div>
  );
};

export default ChatBubble;
