import React from "react";
import styles from "./CoverageDetailsComponent.module.css";
import CheckboxComponent from "../CheckboxComponent/CheckboxComponent";
import RadioButtonComponent from "../RadioButtonComponent/RadioButtonComponent";

const CoverageDetailsCard = ({ addOn, title, items, addOnLabel, labels, selectedOption, onChange }) => {
  return !!addOn ? (
    <div className={styles.addOnDiv}>
      <RadioButtonComponent
        label={addOnLabel}
        id={addOnLabel}
        name="coverage"
        checked={selectedOption === addOnLabel}
        onChange={() => onChange(addOnLabel)}
      />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={styles.cardDiv}>
      <h4>{title}</h4>
      {labels.map((label, index) => (
        <CheckboxComponent key={index} label={label} />
      ))}
    </div>
  );
};

export default CoverageDetailsCard;
