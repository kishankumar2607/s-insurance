import React from "react";
import styles from "./ContactSectionComponent.module.css";
import { Container } from "react-bootstrap";
import ImageComponent from "../ImageComponent/ImageComponent";
import ClaimsImage from "../../assets/images/claims.png";
import PhoneImage from "../../assets/images/Phone.png";
import OnlineSupportImage from "../../assets/images/Online-support.png";
import Link from "next/link";

const ContactSectionComponent = () => {
  return (
    <div className={styles.contactSection}>
      <Container>
        <div className={styles.innerDiv}>
          <h2 className={styles.manageTitle}>
            Contact us about your Cyber insurance claim
          </h2>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <ImageComponent
                src={ClaimsImage}
                alt="Claims"
                imageStyle={styles.icon}
              />
              <h3>Claims</h3>
              <p>24/7</p>
              <a href="tel:1-000-000-0000">1-000-000-0000</a>
              <Link href={"#"} passHref legacyBehavior>
                <a>Submit a claim</a>
              </Link>
            </div>
            <div className={styles.contactMethod}>
              <ImageComponent
                src={PhoneImage}
                alt="Phone"
                imageStyle={styles.icon}
              />
              <h3>Phone</h3>
              <p>Talk to one of our agents. We’re here to help.</p>
              <a href="tel:1-000-000-0000">1-000-000-0000</a>
            </div>
            <div className={styles.contactMethod}>
              <ImageComponent
                src={OnlineSupportImage}
                alt="Online support"
                imageStyle={styles.icon}
              />
              <h3>Online support</h3>
              <p>Access online chat or view our FAQs</p>
              <Link href={"#"} passHref legacyBehavior>
                <a>Help & support</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSectionComponent;
