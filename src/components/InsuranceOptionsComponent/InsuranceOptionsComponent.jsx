// components/InsuranceOptionsComponent.js
import React from "react";
import styles from "./InsuranceOptionsComponent.module.css";
import Image1 from "../../assets/images/Individuals.webp";
import Image2 from "../../assets/images/Small-Businesses.webp";
import Image3 from "../../assets/images/Large-Enterprises.webp";
import { Container } from "react-bootstrap";
import InsuranceOptionCard from "./InsuranceOptionCard/InsuranceOptionCard";

const InsuranceOptionsComponent = () => {
  const insuranceOptions = [
    {
      imageSrc: Image1,
      title: "Cyber Insurance for Personal Use",
      Othertitle: "Personal Cyber Insurance for Individuals",
      description: "Stay protected in the digital world with our personal cyber insurance. Safeguard your personal information, and online activities from cyber threats. Our coverage includes identity theft protection, and support for legal fees.",
      link: "#",
    },
    {
      imageSrc: Image2,
      title: "Cyber Insurance for Small Businesses",
      Othertitle: "Protect Your Small Business from Cyber Threats",
      description: "Gain peace of mind with comprehensive coverage designed to safeguard your small business from financial losses due to cyber incidents. Ensure your business continuity with our tailored solutions.",
      link: "#",
    },
    {
      imageSrc: Image3,
      title: "Cyber Insurance for Large Enterprises",
      Othertitle: "Comprehensive Protection for Large Enterprises",
      description: "Shield your enterprise from cyber incidents with our robust coverage options. Our policies include protection against data breaches, business interruptions, and compliance costs, ensuring your operations remain secure.",
      link: "#",
    },
  ];

  return (
    <div>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.title}>Which coverage is right for you?</h2>
          <div className={styles.options}>
            {insuranceOptions.map((option, index) => (
              <InsuranceOptionCard
                key={index}
                imageSrc={option.imageSrc}
                title={option.title}
                Othertitle={option.Othertitle}
                description={option.description}
                link={option.link}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InsuranceOptionsComponent;
