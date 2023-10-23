import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { EventType } from "..";
import { getFilteredEvents } from "@/components/helpers/api-util";

interface FilteredEventsPageProps {
  filteredEvents: EventType[];
  year: number;
  month: number;
  isError?: Boolean;
}

function FilteredEventsPage({
  filteredEvents,
  year,
  month,
  isError,
}: FilteredEventsPageProps) {
  if (isError) {
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  const filteredData = params?.slug;

  if (filteredData) {
    const year = +filteredData[0];
    const month = +filteredData[1];

    if (
      isNaN(year) ||
      isNaN(month) ||
      year > 2030 ||
      year < 2021 ||
      month < 1 ||
      month > 12
    ) {
      return { props: { isError: true } };
    }

    const filteredEvents = await getFilteredEvents({ year, month });

    return { props: { filteredEvents, year, month } };
  }

  return { notFound: true };
};

export default FilteredEventsPage;
