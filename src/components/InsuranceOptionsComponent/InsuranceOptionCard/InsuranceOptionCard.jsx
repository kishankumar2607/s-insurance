import React from "react";
import Image from "next/image";
import styles from "./InsuranceOptionCard.module.css";
import ImageComponent from "../../ImageComponent/ImageComponent";

const InsuranceOptionCard = ({
  imageSrc,
  title,
  Othertitle,
  description,
  link,
}) => {
  return (
    <div className={styles.option}>
      <ImageComponent src={imageSrc} alt={title} imageStyle={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.optionTitle}>{title}</h3>
        <h3 className={styles.optionAnotherTitle}>{Othertitle}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.learnMore}>
          <a href={link}>Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default InsuranceOptionCard;
