import React from "react";
import CoverageDetailsCard from "./CoverageDetailsCard";

const CoverageDetailsComponent = () => {
  const checkboxLabels = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <div>
      <CoverageDetailsCard title={"title"} labels={checkboxLabels} />
    </div>
  );
};

export default CoverageDetailsComponent;
