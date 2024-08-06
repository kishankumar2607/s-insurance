import React from "react";
import CoverageDetailsCard from "./CoverageDetailsCard";
import styles from "./CoverageDetailsComponent.module.css";

const CoverageDetailsComponent = () => {
  const checkboxLabels = ["Identify Theft Protection", "Data Restoration", "Business Continuity Planning", "Vulnerability Assessments"];
  const addOnabels1 = ["Data Breaches", "Malware and Virus Attacks", "Phishing Attacks", "Cyber Extortion", "Incident Response Cost"];
  const addOnabels2 = ["All Basic Coverage Inclusions", "Ransom Attacks", "Business Interruptions", "Legal Fees and Penalties", "Cyber Forensics"];
  const addOnabels3 = ["All Basic and Enhanced Coverage Inclusions", "Reputation Management", "Crisis Mangement", "Regulatory Compilance COst", "Third Party Liability", "Employee Traning Programs"];
  return (
    <div className={styles.detailsMainDiv}>
      <CoverageDetailsCard addOn addOnLabel={"Basic Coverage"} items={addOnabels1} />
      <CoverageDetailsCard addOn addOnLabel={"Enhanced Coverage"} items={addOnabels2} />
      <CoverageDetailsCard addOn addOnLabel={"Comprehensive Coverage"} items={addOnabels3} />
      <CoverageDetailsCard title={"Add-Ons"} labels={checkboxLabels} />
    </div>
  );
};
export default CoverageDetailsComponent;
