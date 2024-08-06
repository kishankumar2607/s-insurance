import React, { useState } from "react";
import styles from "./FAQComponent.module.css";
import { Container } from "react-bootstrap";

const faqItems = [
  {
    question: "How can I get a quote?",
    answer:
      "You can get a quote by visiting our website, calling our toll-free number, or speaking with one of our insurance advisors at your local SInsurance branch.",
  },
  {
    question:
      "How do I know I'm getting the best price for my auto insurance coverage?",
    answer:
      "We work with multiple insurance providers to ensure you get competitive rates. Our advisors will help you compare options and find the best coverage for your needs and budget.",
  },
  {
    question: "How much home insurance coverage do I need?",
    answer:
      "The amount of coverage you need depends on factors like your home's value, contents, and location. Our advisors can help you assess your needs and recommend appropriate coverage.",
  },
  {
    question: "How long will it take to process my claim?",
    answer:
      "Claim processing times vary depending on the complexity of the claim. We strive to process claims as quickly as possible and will keep you informed throughout the process.",
  },
  {
    question: "What do I need to submit in order to file a claim?",
    answer:
      "To file a claim, you'll typically need your policy number, details of the incident, and any relevant documentation (e.g., police reports, photos). Our claims team will guide you through the specific requirements for your claim.",
  },
];

const legalNotes = `®SInsurance is a registered trademark of The Bank of Nova Scotia, used under license by BNS Insurance Agency Inc. (“BNSIA”). Scotia Home & Auto Insurance is arranged for by BNSIA. 

Home and auto policies are underwritten by Belair Insurance Company Inc., and services are provided by belairdirect Agency Inc. except in the province of Quebec where the services are provided by Belair Insurance Company Inc. (collectively “belairdirect”). We offer car insurance and home insurance in Alberta, Ontario, Quebec, New Brunswick, Nova Scotia, Newfoundland and Labrador and Prince Edward Island and home insurance only in British Columbia.

®belairdirect is a registered trademark of Belair Insurance Company used under licence. 

Scotia Critical Illness Insurance and Scotia Health & Dental Insurance are arranged for by BNSIA and are underwritten by Canadian Premier Life Insurance Company. Securian Canada is the brand name used by Canadian Premier Life Insurance Company and Canadian Premier General Insurance Company to do business in Canada.  
Scotia Enhanced Critical Illness Insurance and Scotia Accidental Death Insurance is arranged for by BNSIA and underwritten by Chubb Life Insurance Company of Canada.
Scotia Term Life Insurance is arranged for by BNSIA and underwritten by The Empire Life Insurance Company.
Scotia Travel Insurance, distributed by the BNS Insurance Agency Inc., is underwritten by The Manufacturers Life Insurance Company (Manulife) and First North American Insurance Company, a wholly owned subsidiary of Manulife. Manulife, P.O. Box 670, Stn. Waterloo, Waterloo, ON N2J 4B8.
These products are not available in Scotiabank branches.  All insurance coverage is subject to certain limitations, restrictions and exclusions set out in the applicable Certificate of Insurance or Policy of Insurance and/or may vary by province or territory.
Apple and the Apple logo are trademarks of Apple Inc. App Store is a service mark of Apple Inc. Google Play, the Google Play logo and Android are trademarks of Google LLC.`;

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [legalNotesOpen, setLegalNotesOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleLegalNotes = () => {
    setLegalNotesOpen(!legalNotesOpen);
  };

  return (
    <section className={styles.faq}>
      <Container>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <ul className={styles.faqList}>
          {faqItems.map((item, index) => (
            <li key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestion} ${
                  openIndex === index ? styles.boldQuestion : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className={styles.faqToggle}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className={styles.faqAnswer}>{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.legalNotes}>
          <a
            href="#legal"
            className={styles.legalLink}
            onClick={toggleLegalNotes}
          >
            Legal notes
            <span
              className={`${styles.arrowIcon} ${
                legalNotesOpen ? styles.rotate : ""
              }`}
            ></span>
          </a>
          {legalNotesOpen && (
            <div
              className={`${styles.legalContent} ${
                legalNotesOpen ? styles.slideDown : styles.slideUp
              } ${legalNotesOpen ? styles.fadeIn : ""}`}
            >
              {legalNotes.split("\n").map((paragraph, index) => (
                <p key={index} className={styles.legalContentParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FAQComponent;
