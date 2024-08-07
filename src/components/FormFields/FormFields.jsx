import styles from "./FormFields.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SelectComponent from "../SelectComponent/SelectComponent";
import CoverageDetailsComponent from "../CoverageDetailsComponent/CoverageDetailsComponent";

const industryOptions = [
  { value: "technology", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
];

const numberOfEmployees = [
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "500+", label: "500+" },
];

const annualRevenue = [
  { value: "", label: "Annual Revenue" },
  { value: "<500k", label: "Less than 500k" },
  { value: "51-200", label: "500k - 1M<" },
  { value: "500k-1m", label: "201-500" },
  { value: "1m-5m", label: "1M - 5M" },
  { value: "5m+", label: "More than 5Ms" },
];

const ContactMethod = [
  {value: "Email", label: "Email"},
  {value: "Call", label: "Call"},
];

const YN = [
  {value: "Yes", label: "Yes"},
  {value: "No", label: "No"},
];

const FormFields = () => {
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
      <InputComponent name={"DOB"} type={"text"} placeholder={"Date of Birth"} />
      <InputComponent name={"Occupation"} type={"text"} placeholder={"Occupation"} />
      <InputComponent name={"Number of Devices "} type={"number"} placeholder={"Number of Devices "} />  
      <SelectComponent initailName={"Have you experienced any cyber incidents in the past year? "} options={YN} />  
      <SelectComponent initailName={"Prefered Contact Method"} options={ContactMethod} />


      <CoverageDetailsComponent />
    </div>
  );
};

export default FormFields;
