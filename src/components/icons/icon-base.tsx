import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode | ReactNode[];
};

export function IconBase({ children, className = "h-4 w-4" }: Props) {
  return (
    <svg
      className={`inline-block ${className}`}
      fill="currentColor"
      height="124"
      viewBox="0 0 256 256"
      width="192"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="256" height="256" fill="none"></rect>

      {children}
    </svg>
  );
}
