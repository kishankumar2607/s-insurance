import Image from "next/image";
import styles from "./CyberInsuranceComponent.module.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Container } from "react-bootstrap";

const CyberInsuranceComponent = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.anotherDiv}>
          <div className={styles.formContainer}>
            <h2>Who are you protecting with cyber insurance?</h2>
            <div className={styles.discount}>
              <p>Get up to 5% discount</p>
              <small>Complete your online quote and save.</small>
            </div>
            <div className={styles.options}>
              <label>
                <input type="radio" name="protection" value="individual" />
                Individual
              </label>
              <label>
                <input
                  type="radio"
                  name="protection"
                  value="small-business"
                  defaultChecked
                />
                Small Business
              </label>
              <label>
                <input
                  type="radio"
                  name="protection"
                  value="large-corporation"
                />
                Large Corporation
              </label>
            </div>
            <ButtonComponent href={"#"} title="Next" />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/image.png" alt="Store" width={400} height={300} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CyberInsuranceComponent;
