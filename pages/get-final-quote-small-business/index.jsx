import { useRouter } from "next/router";
import React from "react";
// import styles from './quote.module.css';

const index = () => {
  const router = useRouter();
  const { coverage } = router.query;

  const coverageDetails = {
    "Basic Coverage": {
      price: "$100",
      items: [
        "Data Breaches",
        "Malware and Virus Attacks",
        "Phishing Attacks",
        "Cyber Extortion",
        "Incident Response Cost",
      ],
    },
    "Enhanced Coverage": {
      price: "$200",
      items: [
        "All Basic Coverage Inclusions",
        "Ransom Attacks",
        "Business Interruptions",
        "Legal Fees and Penalties",
        "Cyber Forensics",
      ],
    },
    "Comprehensive Coverage": {
      price: "$300",
      items: [
        "All Basic and Enhanced Coverage Inclusions",
        "Reputation Management",
        "Crisis Management",
        "Regulatory Compliance Cost",
        "Third Party Liability",
        "Employee Training Programs",
      ],
    },
  };

  const coverageInfo = coverageDetails[coverage] || {
    price: "Not available",
    items: [],
  };

  return (
    <div>
      <h1>Quote Details</h1>
      <p>Selected Coverage: {coverage || "None"}</p>
      <p>Price: {coverageInfo.price}</p>
      <ul>
        {coverageInfo.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default index;
