import React from "react";
import styles from "../../styles/ScotiaInsurance.module.css";
import ImageComponent from "./ImageComponent";
import loginIcon from "../assets/images/login-icon.svg"
import appStoreIcon from "../assets/images/app-store-image.png"
import playStoreIcon from "../assets/images/play-store-image.png"
import manageInsuranceImage from "../assets/images/manage-insurance-image.png"

function ManageInsurance() {
  return (
    <section className={styles.manageInsurance}>
      <div className={styles.manageContent}>
        <h2 className={styles.manageTitle}>
          Manage your home & auto insurance online
        </h2>
        <ul className={styles.manageFeatures}>
          <li>1. Digital proof of insurance</li>
          <li>2. Submit and track a claim</li>
          <li>3. Policy and payment information</li>
          <li>4. Make updates & more</li>
        </ul>
        <button className={styles.discoverButton}>
          Discover Online Services
        </button>
        <div className={styles.loginDiv}>
          <a href="#login" className={styles.loginLink}>
            Ready? Log in
          </a>
          <ImageComponent src={loginIcon} alt={"icon"}/>
        </div>
        <p className={styles.appDownload}>Download the app!</p>
        <div className={styles.appStoreLinks}>
          <ImageComponent
            src={appStoreIcon}
            alt="App Store"
            imageStyle={styles.appStoreIcon}
          />
          <ImageComponent
            src={playStoreIcon}
            alt="Google Play"
            imageStyle={styles.googlePlayIcon}
          />
        </div>
      </div>
      <ImageComponent
        src={manageInsuranceImage}
        alt="Manage Insurance Online"
        imageStyle={styles.manageImage}
      />
    </section>
  );
}

export default ManageInsurance;
