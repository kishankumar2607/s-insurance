import ImageComponent from '../ImageComponent/ImageComponent';
import styles from './CyberQuoteFormComponent.module.css';
import cyberImage from '../../assets/cyber-form/cyber-security.png';

const CyberQuoteFormComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.imageDiv}>
                    <ImageComponent src={cyberImage} alt={"cyberImage"} imageStyle={styles.imagestyle}/>
                </div>
                <div className={styles.header}>
                    <h2>Select your province to get an Cyber quote</h2>
                </div>
                <div className={styles.formGroup}>
                    <select className={styles.select} name="province">
                        <option value="">Select your province</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Alberta">Alberta</option>
                        <option value="Saskatchewan">Saskatchewa</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Newfoundland and Labrador ">Newfoundland and Labrador</option>
                    </select>
                    <button className={styles.button}>Start</button>
                </div>
                <div className={styles.savingsLink}>
                  
                    <p>Helping you get on your way</p>
                    <p>Our friendly team of cyber insurance representatives are here to help</p>
                    <a href="tel:18772360924">1-000-000-000</a>
             
                </div>
            </div>
        </div>
    );
};

export default CyberQuoteFormComponent;
