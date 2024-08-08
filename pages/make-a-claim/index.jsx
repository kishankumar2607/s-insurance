import React from "react";
import ManageInsuranceComponent from "./../../src/components/ManageInsuranceComponent/ManageInsuranceComponent";
import MakeClaimBannerComponent from './../../src/components/MakeClaimBannerComponent/MakeClaimBannerComponent';

const index = () => {
  return (
    <div>
      <MakeClaimBannerComponent />
      <ManageInsuranceComponent />
    </div>
  );
};

export default index;
