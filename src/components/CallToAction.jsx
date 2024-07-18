import React from "react";
import styles from "../../styles/ScotiaInsurance.module.css";
import ImageComponent from "./ImageComponent";
import {
  facebook,
  notes,
  question,
  umbrella,
} from "../assets/images/footerImage";

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

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      {ctaItems.map((item, index) => (
        <div key={index} className={styles.ctaItem}>
          <ImageComponent src={item.icon} alt="" imageStyle={styles.ctaIcon} />
          <h3 className={styles.ctaTitle}>{item.title}</h3>
          <p className={styles.ctaDescription}>{item.description}</p>
          <span className={styles.ctaButton}>{item.action}</span>
        </div>
      ))}
    </section>
  );
}

export default CallToAction;
