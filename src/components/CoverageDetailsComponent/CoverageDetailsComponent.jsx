import React, { useState } from "react";
import CoverageDetailsCard from "./CoverageDetailsCard";
import styles from "./CoverageDetailsComponent.module.css";

const CoverageDetailsComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const checkboxLabels = [
    "Identify Theft Protection",
    "Data Restoration",
    "Business Continuity Planning",
    "Vulnerability Assessments",
  ];

  const addOnLabels1 = [
    "Data Breaches",
    "Malware and Virus Attacks",
    "Phishing Attacks",
    "Cyber Extortion",
    "Incident Response Cost",
  ];

  const addOnLabels2 = [
    "All Basic Coverage Inclusions",
    "Ransom Attacks",
    "Business Interruptions",
    "Legal Fees and Penalties",
    "Cyber Forensics",
  ];

  const addOnLabels3 = [
    "All Basic and Enhanced Coverage Inclusions",
    "Reputation Management",
    "Crisis Management",
    "Regulatory Compliance Cost",
    "Third Party Liability",
    "Employee Training Programs",
  ];

  return (
    <div className={styles.detailsMainDiv}>
      <CoverageDetailsCard
        addOn
        addOnLabel="Basic Coverage"
        items={addOnLabels1}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
      />
      <CoverageDetailsCard
        addOn
        addOnLabel="Comprehensive Coverage"
        items={addOnLabels3}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
      />
      <CoverageDetailsCard
        addOn
        addOnLabel="Enhanced Coverage"
        items={addOnLabels2}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
      />
      <CoverageDetailsCard title="Add-Ons" labels={checkboxLabels} />
    </div>
  );
};

export default CoverageDetailsComponent;
