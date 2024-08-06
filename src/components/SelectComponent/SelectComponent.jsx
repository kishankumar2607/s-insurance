import React from "react";
import styles from "./SelectComponent.module.css";

const SelectComponent = ({ initailName, options }) => {
  return (
    <select name={initailName} className={styles.select}>
      <option value="">{initailName}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
