import React from "react";
import styles from "./SmallFormFieldComponent.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SelectComponent from "../SelectComponent/SelectComponent";
import CoverageDetailsComponent from "../CoverageDetailsComponent/CoverageDetailsComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ImageComponent from "../ImageComponent/ImageComponent";
import SmallCorporationImage from "../../assets/cyber-form/small-corporation-image.png";
import { Container } from "react-bootstrap";

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

const SmallFormFieldComponent = () => {
  return (
    <div className={styles.mainDivStyle}>
      <Container>
        <h1 className={styles.mainTitle}>Small Business</h1>
        <div className={styles.formFields}>
          <div className={styles.imageDiv}>
            <ImageComponent src={SmallCorporationImage} alt={"SmallCorporationImage"}/>
          </div>
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
              name={"Occupation"}
              type={"text"}
              placeholder={"Occupation"}
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
              placeholder={"Number of Computer and Devices"}
            />
            <InputComponent
              name={"TData "}
              type={"number"}
              placeholder={
                "Types of Data Stored (eg: customer data, financial records) "
              }
            />
            <InputComponent
              name={"CMeasure"}
              type={"text"}
              placeholder={
                "Cybersecurity Measures in Place (eg: firewalls, antivirus)"
              }
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

            <CoverageDetailsComponent />
            <div className={styles.buttonDiv}>
              <ButtonComponent title={"Get Quote"} href={"#"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SmallFormFieldComponent;
