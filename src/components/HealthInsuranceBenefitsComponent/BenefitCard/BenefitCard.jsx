import ImageComponent from "../../ImageComponent/ImageComponent";
import styles from "./BenefitCard.module.css";

const BenefitCard = ({ icon, description }) => {
  return (
    <div className={styles.benefit}>
      <ImageComponent
        src={icon}
        alt="BenefitCard Icon"
        imageStyle={styles.icon}
      />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BenefitCard;
