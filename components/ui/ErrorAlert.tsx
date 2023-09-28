import { PropsWithChildren } from "react";
import classes from "./ErrorAlert.module.css";

interface ErrorAlertProps extends PropsWithChildren {}

function ErrorAlert({ children }: ErrorAlertProps) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
