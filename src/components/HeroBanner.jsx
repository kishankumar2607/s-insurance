import React from "react";
import styles from "../../styles/ScotiaInsurance.module.css";

function HeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          The plan for when things don't go as planned
        </h1>
      </div>
    </section>
  );
}

export default HeroBanner;
