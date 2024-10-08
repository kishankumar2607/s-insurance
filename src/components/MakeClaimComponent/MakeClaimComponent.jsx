import React from 'react';
import styles from "./MakeClaimComponent.module.css"
import { Container } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const MakeClaimComponent = () => {
  return (
    <div className={styles.mainDiv}>
        <Container>
            <div className={styles.adviceSection}>
            <h2>Quick and Easy Claims: We are Here for You</h2>
            <ButtonComponent href={"/make-a-claim"} title={"Make a claim"} />
            </div>
        </Container>
    </div>
  )
}

export default MakeClaimComponent