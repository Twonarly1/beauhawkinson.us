"use client";

import { FiX } from "react-icons/fi";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import clsx from "clsx";
import Button from "./button";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  trigger: ReactNode;
  title?: ReactNode;
  children: ReactNode;
};

const Drawer = ({ isOpen, setIsOpen, trigger, title, children }: Props) => {
  return (
    <div>
      <div>{trigger}</div>

      {isOpen && (
        <div
          className={clsx(
            "absolute inset-0 top-0 h-screen w-full items-center justify-center bg-white dark:bg-[#121212]",
            {
              "animate-in slide-in-from-left duration-500": isOpen,
              "animate-out slide-out-to-left duration-200": !isOpen,
            }
          )}
        >
          <div className="flex w-full items-center justify-between p-2.5 px-4">
            <div>{title}</div>
            <Button
              className="z-50 flex items-center"
              onClick={() => {
                console.log("clicked");
                setIsOpen(false);
              }}
            >
              <FiX className="h-5 w-5 cursor-pointer" />
            </Button>
          </div>
          <div className="relative w-full">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
