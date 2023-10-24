type EmojiProp = {
  src: string;
  className?: string;
};

const Emoji = ({ src, className }: EmojiProp) => {
  return (
    <span className="inline-block align-text-bottom">
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
