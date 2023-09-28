import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getFeaturedEvents } from "@/dummy-data";
import { Fragment } from "react";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <EventList events={featuredEvents} />
    </Fragment>
  );
}
