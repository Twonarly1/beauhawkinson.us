import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export const ArrowUpRight = ({ className }: Props) => (
  <IconBase className={className}>
    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
  </IconBase>
);
