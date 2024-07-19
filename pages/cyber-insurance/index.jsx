import React from "react";
import InsuranceHeroBannerComponent from './../../src/components/InsuranceHeroBannerComponent/InsuranceHeroBannerComponent';
import InsuranceOptionsComponent from './../../src/components/InsuranceOptionsComponent/InsuranceOptionsComponent';
import HealthInsuranceBenefitsComponent from './../../src/components/HealthInsuranceBenefitsComponent/HealthInsuranceBenefitsComponent';

const index = () => {
  return (
    <div>
      <InsuranceHeroBannerComponent />
      <HealthInsuranceBenefitsComponent />
      <InsuranceOptionsComponent />
    </div>
  );
};

export default index;
