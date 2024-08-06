import React from "react";
import styles from "./HeaderComponent.module.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import logo from "../../assets/logo/scotiaInsurance-logo1.png";
import searchIcon from "../../assets/images/search-icon.svg";
import downArrow from "../../assets/images/down-arrow.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const HeaderComponent = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.languageSelector}>
        <span className={styles.language}>English</span>
        <ImageComponent src={downArrow} alt="arrow" imageStyle={styles.downArrowImage} />
      </div>
      <div className={styles.shadow}>
        <Container>
          <nav className={styles.navigation}>
            <div className={styles.navContainer}>
              <div className={styles.logo}>
                <Link href="/" passHref>
                  <ImageComponent
                    src={logo}
                    alt="SInsurance Logo"
                    imageStyle={styles.logoImage}
                  />
                </Link>
              </div>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/auto" passHref legacyBehavior>
                    <a className={router.pathname === "/auto" ? styles.active : ""}>Auto</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home" passHref legacyBehavior>
                    <a className={router.pathname === "/home" ? styles.active : ""}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/health" passHref legacyBehavior>
                    <a className={router.pathname === "/health" ? styles.active : ""}>Health</a>
                  </Link>
                </li>
                <li>
                  <Link href="/life" passHref legacyBehavior>
                    <a className={router.pathname === "/life" ? styles.active : ""}>Life</a>
                  </Link>
                </li>
                <li>
                  <Link href="/travel" passHref legacyBehavior>
                    <a className={router.pathname === "/travel" ? styles.active : ""}>Travel</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cyber-insurance" passHref legacyBehavior>
                    <a className={router.pathname === "/cyber-insurance" ? styles.active : ""}>Cyber Insurance</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/" passHref>
                <ImageComponent
                  src={searchIcon}
                  alt="Search Icon"
                />
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default HeaderComponent;
