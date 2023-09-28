import { Data } from "@/dummy-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./EventItem.module.css";

function EventItem(props: Data) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} width={500} height={500} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={`/events/${id}`}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
