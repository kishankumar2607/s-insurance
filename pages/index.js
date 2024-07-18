
import React from "react";
import styles from "../styles/ScotiaInsurance.module.css";
import HeroBanner from './../src/components/HeroBanner';
import InsuranceTypes from './../src/components/InsuranceTypes';
import WhyChooseUs from './../src/components/WhyChooseUs';
import ManageInsurance from './../src/components/ManageInsurance';
import InsurerPartners from './../src/components/InsurerPartners';
import FAQ from './../src/components/FAQ';
import CallToAction from './../src/components/CallToAction';

function ScotiaInsurance() {
  return (
    <div className={styles.container}>
      <main>
        <HeroBanner />
        <InsuranceTypes />
        <WhyChooseUs />
        <ManageInsurance />
        <InsurerPartners />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  );
}

export default ScotiaInsurance;
