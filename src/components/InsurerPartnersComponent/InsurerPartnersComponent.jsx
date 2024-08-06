import React from "react";
import styles from "./InsurerPartnersComponent.module.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../../assets/partners-images/PartnerImage";
import { Container } from "react-bootstrap";

const partnerLogos = [
  {
    id: 1,
    src: image1,
    alt: 'Insurer Partner 1',
  },
  {
    id: 2,
    src: image2,
    alt: 'Insurer Partner 2',
  },
  {
    id: 3,
    src: image3,
    alt: 'Insurer Partner 3',
  },
  {
    id: 4,
    src: image4,
    alt: 'Insurer Partner 4',
  },
  {
    id: 5,
    src: image5,
    alt: 'Insurer Partner 5',
  }
];

const InsurerPartnersComponent = () => {
  return (
    <section className={styles.insurerPartners}>
      <Container>
      <h2 className={styles.sectionTitle}>Our insurer partners</h2>
      <p className={styles.partnerDescription}>
        At SInsurance we are committed to building strong relationships
        with our insurer partners to bring our valued customers premium
        insurance products at competitive rates.
      </p>
      <div className={styles.partnerLogos}>
        {partnerLogos.map((logo) => (
          <ImageComponent
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            imageStyle={styles.partnerLogo}
          />
        ))}
      </div>
      </Container>
    </section>
  );
}

export default InsurerPartnersComponent;
