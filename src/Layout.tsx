import { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <div className="relative flex flex-col min-h-screen px-8">{children}</div>;
};

export default Layout;
