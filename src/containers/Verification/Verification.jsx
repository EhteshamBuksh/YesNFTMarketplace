import React, { useState } from "react";
import styles from "./Verify.module.css";
import ProfileSettingNavigation from "../../components/ProfileSettingNavigation/ProfileSettingNavigation";
import verific_img from "../../images/verification.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Verification = () => {
  const [show0, setShow0] = useState(false);
  const [password, setPassword] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const cr_pwd = (e) => {
    e.preventDefault();
    // Calling toast method by passing string
    toast("New Password Created Succesfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const ch_pwd = (e) => {
    e.preventDefault();
    // Calling toast method by passing string
    toast("Password Changed Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const fg_pwd = (e) => {
    e.preventDefault();
    // Calling toast method by passing string
    toast("Check your Email for New Password", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
 

  const[show, setShow]=useState("password")
  const[show1, setShow1]=useState("password")
  const[show2, setShow2]=useState("password")
  const[show3, setShow3]=useState("password")
  const[show4, setShow4]=useState("password")

  // console.log(show)
  const revealPassword1=()=>{
    if (show === "password"){
      setShow("text")
    }else{
      setShow("password")
    }
  }

  const revealPassword2=()=>{
    if (show1 === "password"){
      setShow1("text")
    }else{
      setShow1("password")
    }
  }

  const revealPassword3=()=>{
    if (show2 === "password"){
      setShow2("text")
    }else{
      setShow2("password")
    }
  }

  const revealPassword4=()=>{
    if (show3 === "password"){
      setShow3("text")
    }else{
      setShow3("password")
    }
  }

  const revealPassword5=()=>{
    if (show4 === "password"){
      setShow4("text")
    }else{
      setShow4("password")
    }
  }

  const [iserror, setIserror] = useState("")
  const [ispassword, setIspassword] = useState("")
  const [isconfirm, setIsconfirm] = useState("")
  const[isChange, setIsChange]= useState("")
  const[confirmChange, setConfirmChange] = useState("")
  const[changeError, setChangeError] = useState("")


  const checkValidation=(e)=>{
  const isconfirm = e.target.value
    setIsconfirm(isconfirm)
    if(ispassword !== isconfirm){
      setIserror("Confirm Password should be match with Password")
    }
    else{
      setIserror(" ")
    }
  }

  const confirmValidation=(e)=>{
    const confirmChange = e.target.value
    setConfirmChange(confirmChange)
    if(isChange !== confirmChange){
      setChangeError("Confirm Password should be match with Password")
    }
    else{
      setChangeError(" ")
    }
  }

  return (
    <div className={['flex', styles.VerificationSettings, ].join(' ')}>
      <ProfileSettingNavigation />
      <div className={['flex flex-col', styles.VerificationSettingsContent].join(' ')}>
        <div className={['flex flex-s-btwn flex-v-align', styles.VerificationSettingsHeading, ].join(' ')}>
          <h3>Two Step verification</h3>
          <div className={styles.off_button}>
            {/* <button>Off</button> */}
            <label className={styles.switch}>
              <input type="Checkbox" onClick={() => setShow0(!show0)} />
              <span className={styles.slider} />
            </label>
          </div>
        </div>
        {/* <div className={styles.two_step}> */}
        {show0 ? (
            <div className={styles.passwords}>
              <div
                className={styles.cr_pwd}
                onClick={() => setPassword(!password)}
              >
                <h3>Create password</h3>
                <span className={styles.dw_arrow}>&#709;</span>
              </div>

              {password ? (
                <div className={styles.new_pwd}>
                  <h3>Create New Password</h3>
                  <form>
                    <div>
                      <input
                        type={show}
                        name="password"
                        placeholder="Password@1234"
                        required 
                        value={ispassword}
                        onChange={(e)=> setIspassword(e.target.value)}
                      />
                      <span onClick={revealPassword1}>&#x1f441;</span>
                    </div>
                    <h3>Confirm Password</h3>
                    <div>
                      <input
                        type={show1}
                        name="password"
                        placeholder="Password@1234"
                        required 
                        value={isconfirm}
                        onChange={(e)=>checkValidation(e)}
                      />
                      <span onClick={revealPassword2}>&#x1f441;</span>
                    </div>
                    <label>{iserror}</label>
                    <br/>
                    <button type="submit" className={styles.submit} onClick={cr_pwd}>
                      Submit
                    </button>
                  </form>
                </div>
              ) : null}

              <div
                className={styles.ch_pwd}
                onClick={() => setChangePassword(!changePassword)}
              >
                <h3>Change password</h3>
                <span className={styles.dw_arrow}>&#709;</span>
              </div>

              {changePassword ? (
                <div className={styles.new_pwd}>
                  <h3>Current Password</h3>
                  <div>
                    <input
                      type={show2}
                      name="password"
                      placeholder="Password@1234"
                      required
                    />
                    <span onClick={revealPassword3}>&#x1f441;</span>
                  </div>
                  <h3>Change Password</h3>
                  <form>
                    <div>
                      <input
                        type={show3}
                        name="password"
                        placeholder="Password@1234"
                        required
                        value={isChange}
                        onChange={(e)=> setIsChange(e.target.value)}

                      />
                      <span onClick={revealPassword4}>&#x1f441;</span>
                    </div>
                    <h3>Confirm Password</h3>
                    <div>
                      <input
                        type={show4}
                        name="password"
                        placeholder="Password@1234"
                        required
                        value={confirmChange}
                        onChange={(e)=>confirmValidation(e)}

                      />
                      <span onClick={revealPassword5}>&#x1f441;</span>
                    </div>
                    <label>{changeError}</label>
                    <br/>

                    <button type="submit" onClick={ch_pwd}>
                      Submit
                    </button>
                  </form>
                </div>
              ) : null}

              <div
                className={styles.fg_pwd}
                onClick={() => setForgotPassword(!forgotPassword)}
              >
                <h3>Forget password</h3>{" "}
                <span className={styles.dw_arrow}>&#709;</span>
              </div>

              {forgotPassword ? (
                <div className={styles.new_pwd}>
                  <h3>Email</h3>
                  <form>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="user@email.com"
                        required
                      />
                    </div>
                    <button type="submit" onClick={fg_pwd}>
                      Submit
                    </button>
                  </form>
                </div>
              ) : null}
            </div>
          ) : (
            <div className={styles.verify_image}>
              <img src={verific_img} alt="verification_image"></img>
            </div>
          )}
      </div>
    </div>
  )
};

export default Verification;
