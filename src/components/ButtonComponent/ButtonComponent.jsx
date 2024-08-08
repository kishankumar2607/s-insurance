import React from "react";
import Link from "next/link";
import styles from "./ButtonComponent.module.css";

const ButtonComponent = ({ href, title , onClick}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={styles.button} onClick={onClick}>
        {title}
      </a>
    </Link>
  );
};

export default ButtonComponent;
