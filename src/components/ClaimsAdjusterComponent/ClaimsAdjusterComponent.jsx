import React from "react";
import styles from "./ClaimsAdjusterComponent.module.css";
import { Container } from "react-bootstrap";

const ClaimsAdjusterComponent = () => {
  return (
    <div className={styles.mainDiv}>
      <Container>
        <div className={styles.innerDiv}>
          <h2 className={styles.manageTitle}>
            You can count on your claims adjuster to:
          </h2>
          <ul className={styles.manageFeatures}>
            <li>Confirm your coverage based on your policy</li>
            <li>Explain your options so that you can decide what to do next</li>
            <li>
              Make arrangements for repair or replacement of your property to
              help you get your life back to normal
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default ClaimsAdjusterComponent;
