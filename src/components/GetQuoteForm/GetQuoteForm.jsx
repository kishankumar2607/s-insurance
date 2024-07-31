// components/GetQuoteForm.js
import styles from './GetQuoteForm.module.css';
import FormFields from '../FormFields/FormFields';
import ImageComponent from '../ImageComponent/ImageComponent';
import bannerImage from "../../assets/cyber-form/individual-cyber-form.png";

const GetQuoteForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2>Last step before your price!</h2>
          <FormFields />
          <button type="submit" className={styles.button}>Get Quote</button>
        </div>
        <div className={styles.imageContainer}>
          <ImageComponent src={bannerImage} alt={"banner image"} imageStyle={styles.imageStyle}/>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteForm;
