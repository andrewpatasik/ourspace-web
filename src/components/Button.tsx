import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClickEvt: MouseEventHandler<HTMLButtonElement>;
  name: string;
}

const Button: FC<ButtonProps> = ({ children, onClickEvt, name }: ButtonProps) => {
  return <button name={name} onClick={onClickEvt} className="p-4 border rounded-full transition active:bg-white">{children}</button>;
};

export default Button;
