import React from "react";
import styles from "./CoverageDetailsComponent.module.css";
import CheckboxComponent from "../CheckboxComponent/CheckboxComponent";

const CoverageDetailsCard = ({ addOn, title, items, addOnLabel, labels }) => {
  return !!addOn ? (
    <div className={styles.addOndiv}>
      <CheckboxComponent label={addOnLabel} />
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
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
