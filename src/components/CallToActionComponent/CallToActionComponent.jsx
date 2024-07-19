import React from "react";
import styles from "./CallToActionComponent.module.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import {
  facebook,
  notes,
  question,
  umbrella,
} from "../../assets/images/footerImage";
import { Container } from "react-bootstrap";

const ctaItems = [
  {
    icon: umbrella,
    title: "Looking for insurance?",
    description: "Let us provide you a quote for the protection you need",
    action: "Request a quote",
  },
  {
    icon: notes,
    title: "Need to start a claim?",
    description: "You can start a claim with just a few clicks",
    action: "Start a claim",
  },
  {
    icon: question,
    title: "Visit our education centre",
    description:
      "Discover helpful videos, tools & articles on a variety of topics",
    action: "Learn more",
  },
  {
    icon: facebook,
    title: "",
    description: "",
  },
];

const CallToActionComponent = () => {
  return (
    <section className={styles.callToAction}>
      <Container>
        <div className={styles.callToActionDiv}>
        {ctaItems.map((item, index) => (
          <div key={index} className={styles.ctaItem}>
            <ImageComponent
              src={item.icon}
              alt=""
              imageStyle={styles.ctaIcon}
            />
            <h3 className={styles.ctaTitle}>{item.title}</h3>
            <p className={styles.ctaDescription}>{item.description}</p>
            <span className={styles.ctaButton}>{item.action}</span>
          </div>
        ))}
        </div>
      </Container>
    </section>
  );
};

export default CallToActionComponent;
