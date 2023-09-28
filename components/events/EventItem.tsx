import { Data } from "@/dummy-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventItem(props: Data) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li>
      <Image src={"/" + image} alt={title} width={500} height={500} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{readableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore event</Link>
      </div>
    </li>
  );
}

export default EventItem;
