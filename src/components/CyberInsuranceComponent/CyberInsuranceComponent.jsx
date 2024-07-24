import { useState } from "react";
import styles from "./CyberInsuranceComponent.module.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Container } from "react-bootstrap";
import ImageComponent from "../ImageComponent/ImageComponent";
import ChangeImage from "./ChangeImage";
import backgroundImage from "../../assets/cyber-form/background.svg";

const CyberInsuranceComponent = () => {
  const [selectedOption, setSelectedOption] = useState("individual");

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
              <label
                className={
                  selectedOption === "individual" ? styles.checked : ""
                }
              >
                Individual
                <input
                  type="radio"
                  name="protection"
                  value="individual"
                  checked={selectedOption === "individual"}
                  onChange={() => setSelectedOption("individual")}
                />
              </label>
              <label
                className={
                  selectedOption === "small-business" ? styles.checked : ""
                }
              >
                Small Business
                <input
                  type="radio"
                  name="protection"
                  value="small-business"
                  checked={selectedOption === "small-business"}
                  onChange={() => setSelectedOption("small-business")}
                />
              </label>
              <label
                className={
                  selectedOption === "large-corporation" ? styles.checked : ""
                }
              >
                Large Corporation
                <input
                  type="radio"
                  name="protection"
                  value="large-corporation"
                  checked={selectedOption === "large-corporation"}
                  onChange={() => setSelectedOption("large-corporation")}
                />
              </label>
            </div>
            <ButtonComponent href={"#"} title="Next" />
          </div>
          <div className={styles.imageContainer}>
            {/* <ChangeImage /> */}
            <ImageComponent src={backgroundImage} alt="Store" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CyberInsuranceComponent;
