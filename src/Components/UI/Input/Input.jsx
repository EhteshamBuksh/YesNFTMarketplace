import React from "react";

import styles from "./Input.module.css";

const input = props => {
    let inputElement = null;
    const inputClasses = [styles.Element];
    let error = null;
    if(props.invalid && props.touched) {
        inputClasses.push(styles.Invalid);
        error = <div className={styles.ErrorMessage}>{props.label} is required.</div>
    }
    switch(props.elementType) {
        case ('input') :
            inputElement = <input 
                id={props.id}
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                disabled={props.disabled ? true : false}
                onChange={props.changed} />;
            break;
        case('textarea'): 
            inputElement = <textarea
                id={props.id}
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                disabled={props.disabled ? true : false}
                onChange={props.changed} />
            break;
        case('select'):
            inputElement = (
                <select className={inputClasses.join(' ')}
                    id={props.id}
                    value={props.value}
                    disabled={props.disabled ? true : false}
                    onChange={props.changed} >
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        ))}
                    <option></option>
                </select>
            );
            break;
        default:
            inputElement = <input 
                id={props.id}
                className={inputClasses.join(' ')} 
                disabled={props.disabled ? true : false}
                {...props.elementConfig} 
                value={props.value} />
    }
    return (
        <div className={styles.Input}>
            <label htmlFor={props.id} className={styles.Label}>{props.label}</label>
            {inputElement}
            {error}
        </div>
    )
}

export default input;