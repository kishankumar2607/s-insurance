import React from "react";
import styles from "./HeaderComponent.module.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import logo from "../../assets/logo/scotiaInsurance-logo.png";
import searchIcon from "../../assets/images/search-icon.svg";
import downArrow from "../../assets/images/down-arrow.png";
import Link from "next/link";
import { Container } from "react-bootstrap";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.languageSelector}>
        <span className={styles.language}>English</span>
        <ImageComponent src={downArrow} alt="arror" imageStyle={styles.downArrowImage}/>
      </div>
      <div className={styles.shadow}>
        <Container>
          <nav className={styles.navigation}>
            <div className={styles.navContainer}>
              <div className={styles.logo}>
                <Link href="/" passHref>
                  <ImageComponent
                    src={logo}
                    alt="Scotia Insurance Logo"
                    imageStyle={styles.logoImage}
                  />
                </Link>
              </div>
              <ul className={styles.navLinks}>
                <li>
                  <Link href={"/"} passHref legacyBehavior>
                    <a>Auto</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref legacyBehavior>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref legacyBehavior>
                    <a>Health</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref legacyBehavior>
                    <a>Life</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref legacyBehavior>
                    <a>Travel</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/cyber-insurance"} passHref legacyBehavior>
                    <a>Cyber Insurance</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href={"/"} passHref>
                <ImageComponent
                  src={searchIcon}
                  alt="Search Icon"
                  // imageStyle={styles.logoImage}
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
