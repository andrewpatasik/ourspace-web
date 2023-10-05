import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClickEvt: MouseEventHandler<HTMLButtonElement>;
  name: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClickEvt,
  name,
  className,
}: ButtonProps) => {
  return (
    <button
      name={name}
      onClick={onClickEvt}
      className={`${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
