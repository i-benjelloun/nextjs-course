import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";
import React from "react";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default AllEventsPage;
