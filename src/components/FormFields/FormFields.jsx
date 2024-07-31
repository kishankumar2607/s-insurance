import { useState } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import styles from './FormFields.module.css';
import InputComponent from "../InputComponent/InputComponent";

const FormFields = () => {
  return (
    <div className={styles.formFields}>
      {/* <input type="text" name="firstName" placeholder="First Name" className={styles.input} />
      <input type="text" name="lastName" placeholder="Last Name" className={styles.input} />
      <input type="email" name="email" placeholder="Email" className={styles.input} />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" className={styles.input} />
      <select name="industry" className={styles.select}>
        <option value="">Industry</option>
        <option value="technology">Technology</option>
        <option value="finance">Finance</option>
        <option value="healthcare">Healthcare</option>
      </select>
      <input type="text" name="companyName" placeholder="Company Name" className={styles.input} />
      <select name="numberOfEmployees" className={styles.select}>
        <option value="">Number of Employees</option>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        <option value="51-200">51-200</option>
        <option value="201-500">201-500</option>
        <option value="500+">500+</option>
      </select>
      <input type="text" name="address" placeholder="Address" className={styles.input} />
      <input type="text" name="postalCode" placeholder="Postal Code" className={styles.input} />
      <select name="annualRevenue" className={styles.select}>
        <option value="">Annual Revenue</option>
        <option value="<500k">Less than 500k</option>
        <option value="500k-1m">500k - 1M</option>
        <option value="1m-5m">1M - 5M</option>
        <option value="5m+">More than 5M</option>
      </select> */}
      <InputComponent name={"Fname"} type={"text"} placeholder={"First Name"}/>
      <InputComponent name={"Lname"} type={"text"} placeholder={"Last Name"}/>
      <InputComponent name={"Email"} type={"email"} placeholder={"Email"}/>
      <InputComponent name={"PNumber"} type={"text"} placeholder={"Phone Number"}/>
      <InputComponent name={"Cname"} type={"text"} placeholder={"Company Name"}/>
      <InputComponent name={"Address"} type={"text"} placeholder={"Address"}/>
      <InputComponent name={"Postal"} type={"text"} placeholder={"Postal Code"}/>
      
      
    </div>
  );
};

export default FormFields;
