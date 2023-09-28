import Link from "next/link";
import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  link: string;
}

function Button({ link, children }: ButtonProps) {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}

export default Button;
