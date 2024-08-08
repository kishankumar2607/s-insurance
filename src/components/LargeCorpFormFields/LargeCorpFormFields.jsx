import React, { useState } from "react";
import styles from "./LargeCorpFormFields.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SelectComponent from "../SelectComponent/SelectComponent";
import CoverageDetailsComponent from "../CoverageDetailsComponent/CoverageDetailsComponent";
import ImageComponent from "../ImageComponent/ImageComponent";
import LargeCorporationImage from "../../assets/cyber-form/large-corporation-image.png";
import { Container } from "react-bootstrap";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const annualRevenue = [
  { value: "", label: "Annual Revenue" },
  { value: "<500k", label: "Less than 500k" },
  { value: "51-200", label: "500k - 1M<" },
  { value: "500k-1m", label: "201-500" },
  { value: "1m-5m", label: "1M - 5M" },
];

const ContactMethod = [
  { value: "Email", label: "Email" },
  { value: "Call", label: "Call" },
];

const YN = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];


const LargeCorpFormFields = () => {
  const [selectedCoverage, setSelectedCoverage] = useState("");

  const handleCoverageChange = (option) => {
    setSelectedCoverage(option);
  };

  const generateQuoteHref = () => {
    return `/get-final-quote-large-corporate?coverage=${encodeURIComponent(selectedCoverage)}`;
  };

  return (
    <div className={styles.mainDivStyle}>
      <Container>
        <h1 className={styles.mainTitle}>Large Business</h1>
        <div className={styles.formFields}>
          <div className={styles.formFieldsDiv}>
            <h2>Last step before your price!</h2>
            <InputComponent
              name={"Bname"}
              type={"text"}
              placeholder={"Business Name"}
            />
            <InputComponent
              name={"CPerson"}
              type={"text"}
              placeholder={"Contact Person"}
            />
            <InputComponent
              name={"Email"}
              type={"email"}
              placeholder={"Email"}
            />
            <InputComponent
              name={"PNumber"}
              type={"number"}
              placeholder={"Phone Number"}
            />
            <InputComponent
              name={"BAddress"}
              type={"text"}
              placeholder={"Business Address"}
            />
            <InputComponent
              name={"Postal"}
              type={"text"}
              placeholder={"Postal Code"}
            />
            <InputComponent
              name={"Industry"}
              type={"text"}
              placeholder={"Industry"}
            />
            <InputComponent
              name={"Number of Employees "}
              type={"number"}
              placeholder={"Number of Employees "}
            />
            <SelectComponent
              initailName={"Annual Revenue"}
              options={annualRevenue}
            />
            <InputComponent
              name={"NDevices "}
              type={"number"}
              placeholder={"Number of Locations"}
            />
            <InputComponent
              name={"HQLocation "}
              type={"number"}
              placeholder={"Head Quater Location"}
            />
            <InputComponent
              name={"TData "}
              type={"number"}
              placeholder={
                "Types of Data Stored (eg: customer data, financial records) "
              }
            />
            <InputComponent
              name={"Audits"}
              type={"text"}
              placeholder={"Frequency of Cybersecurity Audits"}
            />
            <SelectComponent
              initailName={"Do you have a dedicated IT security team? "}
              options={YN}
            />
            <SelectComponent
              initailName={"Do you conduct employee cybersecurity training? "}
              options={YN}
            />

            <SelectComponent
              initailName={
                "Have you experienced any cyber incidents in the past year? "
              }
              options={YN}
            />
            <SelectComponent
              initailName={"Prefered Contact Method"}
              options={ContactMethod}
            />

            <CoverageDetailsComponent onOptionChange={handleCoverageChange} />

            <div className={styles.buttonDiv}>
              <ButtonComponent title={"Get Quote"} href={generateQuoteHref()}  />
            </div>
          </div>
          <div className={styles.imageDiv}>
            <ImageComponent
              src={LargeCorporationImage}
              alt={LargeCorporationImage}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LargeCorpFormFields;
