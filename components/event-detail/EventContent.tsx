import { PropsWithChildren } from "react";
import classes from "./EventContent.module.css";

interface EventContentProps extends PropsWithChildren {}

function EventContent(props: EventContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
