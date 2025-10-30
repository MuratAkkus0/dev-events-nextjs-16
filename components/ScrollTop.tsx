"use client";
import useScrollY from "@/hooks/useScrollY";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const translateXValues = {
  mobile: "bottom-1 right-1",
  md: "md:bottom-5 md:right-5",
  xl: "xl:bottom-10 xl:right-10",
};

const ScrollTop = () => {
  const scrollYPosition = useScrollY();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    console.log(window.innerHeight);
  }, []);

  return (
    <>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className={cn(
          "transition-transform duration-500 fixed p-3 opacity-70 bg-white text-black z-99 rounded-full flex justify-center items-center ",
          `${translateXValues.mobile} ${translateXValues.md} ${translateXValues.xl} `,
          scrollYPosition > windowHeight
            ? "translate-x-0 xl:scale-150"
            : "translate-x-[200%]"
        )}
      >
        <ArrowUp />
      </div>
    </>
  );
};
export default ScrollTop;
