"use client"
import Image from "next/image";

const ExploreButton = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto group hover:opacity-85"
                onClick={() => console.log('CLICK')}>
            <a href="#events">
                Explore Events
                <Image src="/icons/arrow-down.svg" className="group-hover:translate-y-1 transition-all" alt="arrow-down"
                       width={24} height={24}/>
            </a>
        </button>
    )
}
export default ExploreButton
