import { FC, ReactNode } from "react";
import { useBackgroundColor } from "./hooks/useBackgroundColor";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { color } = useBackgroundColor();

  return (
    <main
      className={`${color} no-scrollbar transition-colors ease-in-out relative flex flex-col min-h-screen px-4 sm:px-8`}
    >
      {children}
    </main>
  );
};

export default Layout;
