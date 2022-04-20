import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

import styles from './Settings.module.css';
import formStyles from '../../shared/styles/Form.module.css';
import eye from '../../images/eye.png';
import ProfileSettingNavigation from '../../components/ProfileSettingNavigation/ProfileSettingNavigation';
import Input from '../../components/UI/Input/Input';
import { useStateValue } from '../../store/StateProvider';

import { updateObject, checkValidity } from '../../shared/tools/Utility';

const Settings = () => {
  const [files, setFiles] = useState([]);
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    firstName: {
        label: 'First Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'First Name'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    lastName: {
      label: 'Last Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Last Name'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    userName: {
        label: 'Username',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Username'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    },
    walletAddress: {
        label: 'Wallet Address',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: '0x72e6663e20504b6153d4c5'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false,
        disabled: true
    },
    email: {
        label: 'Email',
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'john@doe.com'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
  });

  const FORM_DIVIDER = 3;
  const [formIsValid, setFormIsValid] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: '100%', height: '100%' }} alt='preview' />
      </div>
    </div>
  ));

  const goToProfile = () => {
    navigate('/profile');
  }

  const inputChangedHandler = (event, inputIdentifier) => {
        
    const updatedFormElement = updateObject(userForm[inputIdentifier], {
        value: event.target.value,
        valid: checkValidity(event.target.value, userForm[inputIdentifier].validation),
        touched: true
    });
    const updatedUserForm = updateObject(userForm, {
        [inputIdentifier]: updatedFormElement
    });
    
    let formIsValid = true;
    for (let inputIdentifier in updatedUserForm) {
        formIsValid = updatedUserForm[inputIdentifier].valid && formIsValid;
    }
    setUserForm(updatedUserForm);
    setFormIsValid(formIsValid);
  };

  const sendDetails = (e) => {
    // dispatch data into central store
    e.preventDefault();
    console.log(e);
    if (formIsValid) {
      dispatch({
        type: 'DETAILS',
        item: {
          firstName: userForm.firstName.value,
          lastName: userForm.lastName.value,
          userName: userForm.userName.value,
          image: images,
          email: userForm.email.value,
        },
      });
    }
  }

  const formElementsArray = [];
  for (let key in userForm) {
      formElementsArray.push({
          id: key,
          config: userForm[key]
      });
  }
  let form = (
    <form className={formStyles.Form} onSubmit={sendDetails}>
        <div className={styles.SettingsFormDivider}>
          <div className={styles.LeftDiv}>
            {formElementsArray.filter((el, i) => i <= FORM_DIVIDER).map(formElement => (
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
            ))}
          </div>
          <div>
            {formElementsArray.filter((el, i) => i > FORM_DIVIDER).map(formElement => (
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
            ))}
            <div className={formStyles.FormRow}>
              <div className={styles.ImageInput}>
                <label className={styles.ImageInputLabel}>Profile Image</label>
                <div className={styles.ImageElementContainer}>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {/* <p>Drop your profile image</p> */}
                    <div className={styles.ProfileImage}>{images}</div>
                  </div>
                  <button className={styles.Button} {...getRootProps()}>
                    <input {...getInputProps()} />
                    Upload New Image</button>
                  <button className={styles.det_2_btn1}>Delete</button>
                </div>
              </div>
            </div>
            <div className={formStyles.FormRow}>
              <div className={styles.ImageInput}>
                <label className={styles.ImageInputLabel}>Banner Image</label>
                <div className={styles.ImageElementContainer}>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={styles.BannerImage}>{images}</div>
                  </div>
                  <button className={styles.Button} {...getRootProps()}>
                    <input {...getInputProps()} />
                    Upload New Image</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={formStyles.ButtonContainer}>
          <button type='submit' onClick={sendDetails} className={styles.Button}>Save</button>
        </div>

    </form>
  );

  return (
    <div className={['flex', styles.Settings, ].join(' ')}>
      <ProfileSettingNavigation />
      <div className={['flex flex-col', styles.SettingsContent].join(' ')}>
        <div className={['flex flex-s-btwn flex-v-align', styles.SettingsHeading, ].join(' ')}>
          <h3>Profile Settings</h3>
          <button type='button' onClick={goToProfile} className={styles.Button}>
              <span>Preview</span>
              <img src={eye} alt='eye_icon'></img>
          </button>
        </div>
        <div className={styles.SettingsForm}>
            {form}
        </div>
      </div>
    </div>
  )
};

export default Settings;
