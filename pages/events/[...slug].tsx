import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { EventType } from "..";
import useSWR, { Fetcher } from "swr";

function FilteredEventsPage() {
  const router = useRouter();

  const fetcher: Fetcher<EventType[], string> = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();
    const events: EventType[] = [];
    for (const key in jsonData) {
      events.push({ id: key, ...jsonData[key] });
    }

    return events;
  };

  const { data, error, isLoading } = useSWR(
    "https://nextjs-course-6d13a-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  const filterData = router.query.slug;

  if (!filterData) {
    return null;
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    error ||
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }

  const filteredEvents = data?.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for those filters</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <div>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList events={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
