import React from "react";
import styles from "./FooterComponent.module.css";
import { Container } from "react-bootstrap";

const footerLinks = [
  "Legal",
  "Privacy",
  "Security and Fraud",
  "Accessibility",
  "Cookie Settings",
];

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.innerFooterStyle}>
          <nav className={styles.footerNav}>
            <ul className={styles.footerLinks}>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
      <div className={styles.copyrightDiv}>
        <p className={styles.copyright}>© Scotiabank.com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
