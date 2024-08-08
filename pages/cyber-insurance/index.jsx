import React from "react";
import InsuranceHeroBannerComponent from './../../src/components/InsuranceHeroBannerComponent/InsuranceHeroBannerComponent';
import InsuranceOptionsComponent from './../../src/components/InsuranceOptionsComponent/InsuranceOptionsComponent';
import HealthInsuranceBenefitsComponent from './../../src/components/HealthInsuranceBenefitsComponent/HealthInsuranceBenefitsComponent';
import MakeClaimComponent from './../../src/components/MakeClaimComponent/MakeClaimComponent';

const index = () => {
  return (
    <div>
      <InsuranceHeroBannerComponent />
      <HealthInsuranceBenefitsComponent />
      <MakeClaimComponent />
      <InsuranceOptionsComponent />
    </div>
  );
};

export default index;
