import { useRouter } from "next/router";
import React from "react";
import styles from "./quote.module.css";
import { Container } from "react-bootstrap";
import ImageComponent from "./../../src/components/ImageComponent/ImageComponent";
import serviceImage from "../../src/assets/cyber-form/services.jpeg";
import ButtonComponent from "./../../src/components/ButtonComponent/ButtonComponent";

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
    <div className={styles.mainDiv}>
      <Container>
        <div className={styles.innerDiv}>
          <div>
            <h1 className={styles.manageTitle}>Quotes Just made for you!</h1>
            <p className={styles.selectedCoverage}>
              Selected Coverage: {coverage || "None"}
            </p>
            <p className={styles.price}>Price: {coverageInfo.price}</p>
            <ul className={styles.listStyle}>
              <p>{coverage || "None"}</p>
              {coverageInfo.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <ImageComponent src={serviceImage} />
          </div>
        </div>
        <div>
          <div className={styles.adviceSection}>
            <h2>Make a claim</h2>
            <ButtonComponent href={"/make-a-claim"} title={"Make a claim"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
