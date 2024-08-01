import React from 'react';
import styles from './HeroBannerComponent.module.css';
import { Container } from 'react-bootstrap';

const HeroBannerComponent = () => {
  return (
    <section className={styles.heroBanner}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The plan for when things don't go as planned
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default HeroBannerComponent;
