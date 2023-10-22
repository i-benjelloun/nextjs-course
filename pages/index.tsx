import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/components/helpers/api-util";
import { GetStaticProps } from "next";
import { Fragment } from "react";

export interface EventType {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: Boolean;
}
interface HomePageProps {
  featuredEvents: EventType[];
}

export default function HomePage({ featuredEvents }: HomePageProps) {
  return (
    <Fragment>
      <EventList events={featuredEvents} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return { props: { featuredEvents: featuredEvents }, revalidate: 1800 };
};
