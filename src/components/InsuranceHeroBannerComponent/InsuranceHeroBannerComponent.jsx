import React from "react";
import styles from "./InsuranceHeroBannerComponent.module.css";
import { Container } from "react-bootstrap";

const InsuranceHeroBannerComponent = () => {
  return (
    <section className={styles.heroBanner}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Cyber Insurance</h1>
          <h3 className={styles.heroDescription}>“Shielding Your Digital World with Confidence”</h3>
          <button className={styles.animatedButton}>Request A Quote</button>
        </div>
      </Container>
    </section>
  );
};

export default InsuranceHeroBannerComponent;
