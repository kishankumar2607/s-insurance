import { useState } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import styles from "./CyberQuoteFormComponent.module.css";
import cyberImage from "../../assets/cyber-form/cyber-security.png";

const CyberQuoteFormComponent = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [error, setError] = useState("");

  const handleStartClick = () => {
    if (!selectedProvince) {
      setError("Please select a province");
    } else {
      setError("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.imageDiv}>
          <ImageComponent
            src={cyberImage}
            alt={"cyberImage"}
            priority={true}
            imageStyle={styles.imagestyle}
          />
        </div>
        <div className={styles.header}>
          <h2>Select your province to get a Cyber quote</h2>
        </div>
        <div className={styles.formGroup}>
          <select
            className={styles.select}
            name="province"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            <option value="">Select your province</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            <option value="Alberta">Alberta</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Manitoba">Manitoba</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Newfoundland and Labrador">
              Newfoundland and Labrador
            </option>
          </select>
          {error && <p className={styles.error}>{error}</p>}
          <div onClick={handleStartClick}>
            <ButtonComponent
              href={selectedProvince && "/quote"}
              title="Start"
            />
          </div>
        </div>
        <div className={styles.savingsLink}>
          <h4>Helping you get on your way</h4>
          <p>
            Our friendly team of cyber insurance representatives are here to
            help
          </p>
          <a href="tel:1000000000">1-000-000-000</a>
        </div>
      </div>
    </div>
  );
};

export default CyberQuoteFormComponent;
