import ExploreButton from "@/components/ExploreButton";
import { events } from "@/lib/constants";
import EventCard from "@/components/EventCard";
import ModelViewer from "@/components/ModelViewer";
import { url } from "inspector";
export default async function Home() {
  return (
    <>
      <section className="container mx-auto min-h-screen max-h-svh max-sm:px-4 grid grid-rows-12 items-center">
        <div className="row-span-8">
          <div className="w-full h-fit flex justify-center">
            {/* @ts-ignore */}
            <ModelViewer
              url="/ToyCar.glb"
              defaultZoom={1}
              showScreenshotButton={false}
            />
          </div>
          <h1 className="text-center xl:text-8xl">
            The Hub for Every Dev <br /> Event You Can't Miss
          </h1>
          <p className="text-center xl:text-lg mt-5">
            Hackathons, Meetups, and Conferences, All in One Place
          </p>
          <ExploreButton />
        </div>
      </section>
      <div id="events"></div>
      <section className="bg-black/50 p-4 rounded-xl">
        <div className="min-h-screen container max-sm:px-4 mx-auto">
          <div className="mt-20 space-y-7">
            <h3>Featured Events</h3>

            <ul className="events">
              {events &&
                events.length > 0 &&
                events.map((event) => (
                  <li key={event.title} className="list-none">
                    <EventCard {...event} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="h-16"></div>
    </>
  );
}
