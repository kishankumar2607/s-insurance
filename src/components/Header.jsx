import React from "react";
import styles from "../../styles/ScotiaInsurance.module.css";
import ImageComponent from "./ImageComponent";
import logo from "../assets/logo/scotiaInsurance-logo.png";
import searchIcon from "../assets/images/search-icon.svg";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.languageSelector}>
        <span className={styles.language}>English</span>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <a href="/">
              <ImageComponent
                src={logo}
                alt="Scotia Insurance Logo"
                imageStyle={styles.logoImage}
              />
            </a>
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
              <Link href={"/"} passHref legacyBehavior>
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
    </header>
  );
}

export default Header;
