import React from 'react';
import styles from './WhyChooseUsComponent.module.css';
import ImageComponent from '../ImageComponent/ImageComponent';
import protectImage from '../../assets/images/protect-image.png';
import coverageImage from '../../assets/images/Coverage-image.png';
import needImage from '../../assets/images/needs-image.png';
import { Container } from 'react-bootstrap';

const reasons = [
  {
    icon: needImage,
    title: "Your needs first",
    description:
      "SInsurance puts you first. Our dedicated insurance advisors are here to provide you with personalized help and exceptional service.",
  },
  {
    icon: protectImage,
    title: "Protection that fits you",
    description:
      "Whether you're looking to protect your home, car, or yourself and loved ones, we have the expertise and resources to help find the coverage that meets your needs.",
  },
  {
    icon: coverageImage,
    title: "Coverage made easy",
    description:
      "Take advantage of flexible and affordable coverage options, comprehensive benefits, and competitive prices.",
  },
];

const WhyChooseUsComponent = () => {
  return (
    <section className={styles.whyChooseUs}>
      <Container>
        <h2 className={styles.sectionTitle}>Why choose SInsurance?</h2>
        <p className={styles.sectionDescription}>
          SInsurance has teamed up with some of Canada&apos;s most trusted
          insurance providers to give you access to the best insurance options
          for your needs.
        </p>
        <div className={styles.reasonsList}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonItem}>
              <ImageComponent
                src={reason.icon}
                alt=""
                imageStyle={styles.reasonIcon}
              />
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsComponent;
