import { PropsWithChildren } from "react";
import classes from "./EventLogistics.module.css";

interface LogisticsItemProps extends PropsWithChildren {
  icon: () => JSX.Element;
}

function LogisticsItem({ icon, children }: LogisticsItemProps) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon()}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
