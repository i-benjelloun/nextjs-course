import Link from "next/link";
import React, { MouseEventHandler, PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  link?: string;
  onClick: MouseEventHandler;
}

function Button({ link, children, onClick }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
