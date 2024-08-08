import React from "react";
import styles from "./MakeClaimBannerComponent.module.css";
import { Container } from "react-bootstrap";

const MakeClaimBannerComponent = () => {
  return (
    <div className={styles.mainDiv}>
      <Container>
        <h1 className={styles.title}>Cyber insurance claims</h1>
      </Container>
    </div>
  );
};

export default MakeClaimBannerComponent;
