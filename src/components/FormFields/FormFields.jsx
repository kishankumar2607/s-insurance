import React, { useState } from "react";
import styles from "./FormFields.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SelectComponent from "../SelectComponent/SelectComponent";
import CoverageDetailsComponent from "../CoverageDetailsComponent/CoverageDetailsComponent";

const ContactMethod = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const FormFields = () => {
  const [dateValue, setDateValue] = useState("");
  const [isDatePlaceholder, setIsDatePlaceholder] = useState(true);

  const handleDateFocus = () => {
    setIsDatePlaceholder(false);
  };

  const handleDateBlur = () => {
    if (dateValue === "") {
      setIsDatePlaceholder(true);
    }
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  return (
    <div className={styles.formFields}>
      <InputComponent name={"Fname"} type={"text"} placeholder={"First Name"} />
      <InputComponent name={"Lname"} type={"text"} placeholder={"Last Name"} />
      <InputComponent name={"Email"} type={"email"} placeholder={"Email"} />
      <InputComponent
        name={"PNumber"}
        type={"text"}
        placeholder={"Phone Number"}
      />
      <InputComponent name={"Address"} type={"text"} placeholder={"Address"} />
      <InputComponent
        name={"Postal"}
        type={"text"}
        placeholder={"Postal Code"}
      />
      <div className={styles.dateDiv}>
        {isDatePlaceholder ? (
          <input
            type="text"
            placeholder="Date of Birth"
            onFocus={handleDateFocus}
            className={styles.input}
          />
        ) : (
          <input
            name="DOB"
            type="date"
            value={dateValue}
            onChange={handleDateChange}
            onBlur={handleDateBlur}
            className={styles.input}
          />
        )}
      </div>
      <InputComponent
        name={"Occupation"}
        type={"text"}
        placeholder={"Occupation"}
      />
      <InputComponent
        name={"Number of Devices "}
        type={"number"}
        placeholder={"Number of Devices "}
      />
      <InputComponent
        name={"CyberIncident "}
        type={"text"}
        placeholder={
          "Have you experienced any cyber incidents in the past year?  "
        }
      />
      <SelectComponent
        initailName={"Prefered Contact Method"}
        options={ContactMethod}
      />

      <CoverageDetailsComponent />
    </div>
  );
};

export default FormFields;
