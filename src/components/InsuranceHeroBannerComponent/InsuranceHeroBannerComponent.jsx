import React from "react";
import styles from "./InsuranceHeroBannerComponent.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";

const InsuranceHeroBannerComponent = () => {
  return (
    <section className={styles.heroBanner}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Cyber Insurance</h1>
          <h3 className={styles.heroDescription}>Shielding Your Digital World with Confidence</h3>
          <Link href={"/cyber-quote"} passHref>
            <button className={styles.animatedButton}>Request A Quote</button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default InsuranceHeroBannerComponent;
