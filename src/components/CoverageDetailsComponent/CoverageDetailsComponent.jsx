import React from "react";
import CoverageDetailsCard from "./CoverageDetailsCard";
import styles from "./CoverageDetailsComponent.module.css";

const CoverageDetailsComponent = () => {
  const checkboxLabels = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const addOnabels1 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const addOnabels2 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const addOnabels3 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <div className={styles.detailsMainDiv}>
      <CoverageDetailsCard addOn addOnLabel={"title"} items={addOnabels1} />
      <CoverageDetailsCard addOn addOnLabel={"title"} items={addOnabels2} />
      <CoverageDetailsCard addOn addOnLabel={"title"} items={addOnabels3} />
      <CoverageDetailsCard title={"title"} labels={checkboxLabels} />
    </div>
  );
};
export default CoverageDetailsComponent;
