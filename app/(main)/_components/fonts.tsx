import { cn } from "@/lib/utils";

import { La_Belle_Aurore, Vesper_Libre } from "next/font/google";

const titleFont = La_Belle_Aurore({
  subsets: ["latin"],
  weight: "400",
});

interface TitleFontProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

const TitleFont = ({ children, className, ...props }: TitleFontProps) => {
  return (
    <span {...props} className={cn(titleFont.className, className)}>
      {children}
    </span>
  );
};

const subTitleFont = Vesper_Libre({
  subsets: ["latin"],
  weight: "400",
});

interface SubTitleFontProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

const SubTitleFont = ({ children, className, ...props }: SubTitleFontProps) => {
  return (
    <span {...props} className={cn(subTitleFont.className, className)}>
      {children}
    </span>
  );
};

export { TitleFont, SubTitleFont };
