import { Data } from "@/dummy-data";
import React from "react";
import EventItem from "./EventItem";

function EventList({ events }: { events: Data[] }) {
  return (
    <ul>
      {events.map((item: Data) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default EventList;
