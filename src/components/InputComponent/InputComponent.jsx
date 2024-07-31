import React from 'react';
import styles from "./InputComponent.module.css";

const InputComponent = ({type, name, placeholder}) => {
    return (
        <div className={styles.mainDiv}>
            <input type={type} name={name} placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default InputComponent