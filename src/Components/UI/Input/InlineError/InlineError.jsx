import React from 'react';

import styles from './InlineError.module.css';

const ERROR_TYPES = {
    required: 'required',
    minLength: 'minLength',
    maxLength: 'maxLength',
    numeric: 'numeric',
}

const InlineError = props => {
    const { errorType, fieldName, errorTypeValue } = props ;
    let message = '';

    switch(errorType) {
        case ERROR_TYPES.required:
            message = `${fieldName} is required`;
            break;
        case ERROR_TYPES.minLength:
            message = `${fieldName} should be minimum ${errorTypeValue} characters long`;
            break;
        case ERROR_TYPES.maxLength:
            message = `${fieldName} should be minimum ${errorTypeValue} characters long`;
            break;
        default: 
            message = `${fieldName} is required`
    }

    return (
        <div className={styles.Invalid}>{message}</div>
    )
};


export default InlineError;