import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/components/helpers/api-util";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { EventType } from "..";
import { GetStaticProps } from "next";

export interface FindEventsHandlerProps {
  year: string;
  month: string;
}

interface AllEventsPageProps {
  allEvents: EventType[];
}

function AllEventsPage({ allEvents }: AllEventsPageProps) {
  const router = useRouter();
  function findEventsHandler({ year, month }: FindEventsHandlerProps) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<AllEventsPageProps> = async () => {
  const allEvents = await getAllEvents();
  return { props: { allEvents }, revalidate: 60 };
};

export default AllEventsPage;
