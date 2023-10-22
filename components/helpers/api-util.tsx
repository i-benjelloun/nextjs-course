import { EventType } from "@/pages";

export const getAllEvents = async () => {
  const rawEvents = await fetch(
    "https://nextjs-course-6d13a-default-rtdb.firebaseio.com/events.json"
  );
  const data = await rawEvents.json();

  const events: EventType[] = [];
  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }
  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};
