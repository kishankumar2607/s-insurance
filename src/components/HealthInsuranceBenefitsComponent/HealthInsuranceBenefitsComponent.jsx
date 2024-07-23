import styles from "./HealthInsuranceBenefitsComponent.module.css";
import supportImage from "../../assets/images/support.png";
import profitImage from "../../assets/images/profit.png";
import securityImage from "../../assets/images/security.png";
import invoiceImage from "../../assets/images/invoice.png";
import BenefitCard from "./BenefitCard/BenefitCard";
import { Container } from "react-bootstrap";

const benefitsData = [
  {
    icon: securityImage,
    description:
      "Covers costs from data breaches, cyberattacks, business interruptions, and system outages.",
  },
  {
    icon: profitImage,
    description:
      "Ensures swift recovery by covering system restoration and business interruption expenses.",
  },
  {
    icon: invoiceImage,
    description:
      "Covers fines, legal fees, and costs for regulatory breaches and mandatory notifications.",
  },
  {
    icon: supportImage,
    description:
      "Access to cyber security specialists to help manage and mitigate risks.",
  },
];

const HealthInsuranceBenefitsComponent = () => {
  return (
    <div className={styles.container}>
      <Container>
        <h2 className={styles.title}>Why consider cyber insurance?</h2>
        <div className={styles.benefits}>
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HealthInsuranceBenefitsComponent;
