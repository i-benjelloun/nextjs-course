import Link from "next/link";
import React, {
  EventHandler,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function Button({ link, children, onClick }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
