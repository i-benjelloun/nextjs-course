import { Data } from "@/dummy-data";
import React from "react";
import EventItem from "./EventItem";

import styles from "./EventList.module.css";

function EventList({ events }: { events: Data[] }) {
  return (
    <ul className={styles.list}>
      {events.map((item: Data) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default EventList;
