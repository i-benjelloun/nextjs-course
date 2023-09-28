import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

function EventDetailPage() {
  const {
    query: { eventId },
  } = useRouter();

  const event = typeof eventId === "string" ? getEventById(eventId) : null;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
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

export default EventDetailPage;
