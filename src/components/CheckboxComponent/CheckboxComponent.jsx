
import React, { useState } from "react";
import styles from "./CheckboxComponent.module.css";

const CheckboxComponent = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.checkbox}>
      <label className={styles.checkboxLabel}>
        <h4>{label}</h4>
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleCheckbox}
          className={styles.checkboxInput}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default CheckboxComponent;
