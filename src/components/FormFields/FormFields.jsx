import styles from "./FormFields.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SelectComponent from "../SelectComponent/SelectComponent";
import CheckboxComponent from "../CheckboxComponent/CheckboxComponent";
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
      <SelectComponent initailName="Industry" options={industryOptions} />
      <InputComponent
        name={"Cname"}
        type={"text"}
        placeholder={"Company Name"}
      />
      <SelectComponent
        initailName={"Number of Employees"}
        options={numberOfEmployees}
      />
      <InputComponent name={"Address"} type={"text"} placeholder={"Address"} />
      <InputComponent
        name={"Postal"}
        type={"text"}
        placeholder={"Postal Code"}
      />
      <SelectComponent initailName={"Annual Revenue"} options={annualRevenue} />
      <CoverageDetailsComponent />
    </div>
  );
};

export default FormFields;
