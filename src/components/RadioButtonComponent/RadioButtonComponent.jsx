import React from "react";
import styles from "./RadioButtonComponent.module.css";

const RadioButtonComponent = ({ label, id, name, checked, onChange }) => {
  return (
    <div className={styles.radioButton}>
      <label className={styles.radioButtonLabel} htmlFor={id}>
        <h4>{label}</h4>
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          className={styles.radioButtonInput}
        />
        <span className={styles.radioCheckmark}></span>
      </label>
    </div>
  );
};

export default RadioButtonComponent;
