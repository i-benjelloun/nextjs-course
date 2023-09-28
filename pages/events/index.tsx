import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

export interface FindEventsHandlerProps {
  year: string;
  month: string;
}

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  function findEventsHandler({ year, month }: FindEventsHandlerProps) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export default AllEventsPage;
