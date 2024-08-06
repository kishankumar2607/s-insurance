import React from 'react';
import styles from "./CoverageDetailsComponent.module.css";
import CheckboxComponent from '../CheckboxComponent/CheckboxComponent';

const CoverageDetailsCard = ({ title, labels }) => {
  return (
    <div className={styles.cardDiv}>
        <h4>{title}</h4>
      {labels.map((label, index) => (
        <CheckboxComponent key={index} label={label} />
      ))}
    </div>
  );
};

export default CoverageDetailsCard;
