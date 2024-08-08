import React from "react";
import ManageInsuranceComponent from "./../../src/components/ManageInsuranceComponent/ManageInsuranceComponent";
import MakeClaimBannerComponent from './../../src/components/MakeClaimBannerComponent/MakeClaimBannerComponent';
import FAQComponent from './../../src/components/FAQComponent/FAQComponent';
import ClaimsAdjusterComponent from './../../src/components/ClaimsAdjusterComponent/ClaimsAdjusterComponent';
import ContactSectionComponent from './../../src/components/ContactSectionComponent/ContactSectionComponent';

const index = () => {
  return (
    <div>
      <MakeClaimBannerComponent />
      <ContactSectionComponent />
      <ManageInsuranceComponent />
      <ClaimsAdjusterComponent />
      <FAQComponent />
    </div>
  );
};

export default index;
