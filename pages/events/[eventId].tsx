import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import { getEventById } from "@/components/helpers/api-util";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import React, { Fragment } from "react";
import { EventType } from "..";
import { getFeaturedEvents } from "@/dummy-data";

interface EventDetailPageProps {
  event: EventType | null | undefined;
}

function EventDetailPage({ event }: EventDetailPageProps) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<EventDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const eventId = context.params?.eventId;

  const event =
    typeof eventId === "string" ? await getEventById(eventId) : null;

  return { props: { event }, notFound: !event, revalidate: 30 };
};

export default EventDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    };
  });
  return { paths: paths, fallback: "blocking" };
};
