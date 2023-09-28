import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/dummy-data";
import React, { Fragment } from "react";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList events={events} />
    </Fragment>
  );
}

export default AllEventsPage;
