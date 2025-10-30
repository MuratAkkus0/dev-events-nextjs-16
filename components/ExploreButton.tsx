"use client";
import Image from "next/image";

const ExploreButton = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-12 mx-auto group hover:opacity-85"
      onClick={() => console.log("CLICK")}
    >
      <a href="#events" className="xl:text-xl">
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          className=" animate-bottom-arrow"
          alt="arrow-down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
};
export default ExploreButton;
