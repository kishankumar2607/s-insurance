
import React from "react";
import styles from "../../styles/ScotiaInsurance.module.css";
import { carImage, heartImage, homeImage, planeImage,userImage } from "../assets/images/InsuranceTypeImage";
import ImageComponent from "./ImageComponent";

const insuranceTypes = [
  {
    icon: carImage,
    name: "Auto insurance",
  },
  {
    icon: homeImage,
    name: "Home insurance",
  },
  {
    icon: userImage,
    name: "Life insurance",
  },
  {
    icon: heartImage,
    name: "Health insurance",
  },
  {
    icon: planeImage,
    name: "Travel insurance",
  },
];

function InsuranceTypes() {
  return (
    <section className={styles.insuranceTypes}>
      <h2 className={styles.sectionTitle}>
        When it comes to insurance for Canadians, Scotia Insurance has you
        covered
      </h2>
      <div className={styles.typesList}>
        {insuranceTypes.map((type, index) => (
          <div key={index} className={styles.typeItem}>
            <ImageComponent
              src={type.icon}
              alt={`${type.name} icon`}
              // className={styles.typeIcon}
            />
            <span className={styles.typeName}>{type.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InsuranceTypes;
