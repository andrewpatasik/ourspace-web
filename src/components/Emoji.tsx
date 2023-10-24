type EmojiProp = {
  src: string;
  className?: string;
  align?: string
};

const Emoji = ({ src, className, align = "align-text-bottom" }: EmojiProp) => {
  return (
    <span className={`inline-block ${align}`}>
      <img
        src={`images/emoji/${src}.svg`}
        width={24}
        height={24}
        className={`${className}`}
      />
    </span>
  );
};

export default Emoji;
