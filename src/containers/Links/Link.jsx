import React, { useState } from "react";

import styles from "./Link.module.css";
import formStyles from '../../shared/styles/Form.module.css';
import ProfileSettingNavigation from "../../components/ProfileSettingNavigation/ProfileSettingNavigation";
import { updateObject, checkValidity } from '../../shared/tools/Utility';
import Input from "../../components/UI/Input/Input";

const Link = () => {

  const [socialLinksForm, setSocialLinksForm] = useState({
    fb: {
        label: 'Facebook',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Facebook link'
        },
        value: '',
        validation: {
            required: false
        },
        valid: false,
        touched: false
    },
    twitter: {
      label: 'Twitter',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Twitter Link'
        },
        value: '',
        validation: {
            required: false
        },
        valid: false,
        touched: false
    },
    pinterest: {
        label: 'Pinterest',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Pinterest Link'
        },
        value: '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false
    },
    linkedIn: {
        label: 'Linkedin',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Linkedin Link'
        },
        value: '',
        validation: {
            required: false
        },
        valid: false,
        touched: false
    },
    discord: {
        label: 'Discord',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Discord link'
        },
        value: '',
        validation: {
            required: false,
        },
        valid: false,
        touched: false
    },
    instagram: {
      label: 'Instagram',
      elementType: 'input',
      elementConfig: {
          type: 'text',
          placeholder: 'Instagram link'
      },
      value: '',
      validation: {
          required: false,
      },
      valid: false,
      touched: false
  },
  });

  const [ formIsValid, setFormIsValid ] = useState(false);

  const inputChangedHandler = (event, inputIdentifier) => {
        
    const updatedFormElement = updateObject(socialLinksForm[inputIdentifier], {
        value: event.target.value,
        valid: checkValidity(event.target.value, socialLinksForm[inputIdentifier].validation),
        touched: true
    });
    const updatedSocialLinkForm = updateObject(socialLinksForm, {
        [inputIdentifier]: updatedFormElement
    });
    
    let formIsValid = true;
    for (let inputIdentifier in updatedSocialLinkForm) {
        formIsValid = updatedSocialLinkForm[inputIdentifier].valid && formIsValid;
    }
    setSocialLinksForm(updatedSocialLinkForm);
    setFormIsValid(formIsValid);
  };

  const saveLinks = (e) => {
    e.preventDefault();
    if(formIsValid) {
      console.log(socialLinksForm);
    }
  }


  const formElementsArray = [];
  for (let key in socialLinksForm) {
      formElementsArray.push({
          id: key,
          config: socialLinksForm[key]
      });
  }

  let form = (
    <form className={formStyles.Form} onSubmit={saveLinks}>
      <div className={styles.FormContainer}>
      {formElementsArray.map(formElement => (
        <div className={styles.FormElement}>
          <div className={formStyles.FormRow} key={formElement.id}>
            <Input 
                id={formElement.id}
                label={formElement.config.label}
                disabled={formElement.config.disabled}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => inputChangedHandler(event, formElement.id)} />
          </div>
        </div>
      ))}
      </div>
      <div className={formStyles.ButtonContainer}>
        <button type='submit' className={formStyles.Button}>UpdateSocialProfiles</button>
      </div>
    </form>
  )

  return (
    <div className={['flex', styles.SocialLinks, ].join(' ')}>
      <ProfileSettingNavigation />
      <div className={['flex flex-col', styles.SocialLinksContent].join(' ')}>
        <div className={['flex flex-s-btwn flex-v-align', styles.SocialLinksHeading, ].join(' ')}>
          <h3>Social Links</h3>
        </div>
        <div className={styles.SocialLinksForm}>
            {form}
        </div>
      </div>
    </div>
  )
};

export default Link;
