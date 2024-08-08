
import styles from "./GetQuoteForm.module.css";
import FormFields from "../FormFields/FormFields";
import ImageComponent from "../ImageComponent/ImageComponent";
import bannerImage from "../../assets/cyber-form/individual-cyber-form1.png";
import { Container } from "react-bootstrap";

const GetQuoteForm = () => {
  return (
    <div className={styles.mainDiv}>
      <Container>
      <h1 className={styles.mainTitle}>Individual Business</h1>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <h2>Last step before your price!</h2>
            <FormFields />
          </div>
          <div className={styles.imageContainer}>
            <ImageComponent
              src={bannerImage}
              alt={"banner image"}
              imageStyle={styles.imageStyle}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetQuoteForm;
