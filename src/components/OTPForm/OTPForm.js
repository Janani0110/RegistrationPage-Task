import React, {useContext,useState, useEffect} from 'react';

// Csss
import '../PersonalForm/PersonalForm.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const OTPForm = ({OtpForm, backToForm}) => {

    const [box1, setBox1] = useState(null)
    const [box2, setBox2] = useState(null)
    const [box3, setBox3] = useState(null)
    const [box4, setBox4] = useState(null)
    const [box5, setBox5] = useState(null)
    const [boxError, setBoxError] = useState('');
    const [btnValidation, setBtnValidation] = useState(true);

    const OTPHandler = (e, id, currentId) => {
        console.log(e.target.value);
        console.log(id);

        if (currentId === 'box1') {
            setBox1(e.target.value);
        } 
        if (currentId === 'box2') {
            setBox2(e.target.value);
        } 
        if (currentId === 'box3') {
            setBox3(e.target.value);
        } 
        if (currentId === 'box4') {
            setBox4(e.target.value);
        } 
        if (currentId === 'box5') {
            setBox5(e.target.value);
        }

        console.log({box1});
        console.log({box2});
        console.log({box3});
        console.log({box4});
        console.log({box5});

        if (box1 && box2 && box3 && box4) {
            setBtnValidation(!btnValidation)
        }

        document.getElementById(id).focus();
    }


    const backToCompanyForm = () => {
        backToForm({name: 'CompanyForm'})
    }


    const submitHanlder = () => {
        
        if (box1 >= 0 && box1 !== null && 
            box2 >= 0 && box2 !== null &&
            box3 >= 0 && box3 !== null &&
            box4 >= 0 && box4 !== null && 
            box5 >= 0 && box5 !== null ) {

            OtpForm(true);
            window.location.href='https://squashapps.com/';

        } else {
           setBoxError('Enter the OTP value');
        }
    }
    return (
        <div className="form-row mb-4 p-3">
           
           <label>Enter your code</label>

           <div className="row mt-3">

            <div className="col-md-2">
                <input onChange={(e) => OTPHandler(e, 'box2', 'box1')} maxLength="1" type="text" id="box1" className="form-control otpBox" />    
            </div>

            <div className="col-md-2">
                <input onChange={(e) => OTPHandler(e, 'box3', 'box2')} maxLength="1" type="text" id="box2" className="form-control otpBox margin-box1" />    
            </div>

            <div className="col-md-2">
                <input onChange={(e) => OTPHandler(e, 'box4', 'box3')} maxLength="1" type="text" id="box3" className="form-control otpBox margin-box2" />    
            </div>

            <div className="col-md-2">
                <input onChange={(e) => OTPHandler(e, 'box5', 'box4')} maxLength="1" type="text" id="box4" className="form-control otpBox margin-box3" />    
            </div>

            <div className="col-md-2">
                <input onChange={(e) => OTPHandler(e, 'box5', 'box5')} maxLength="1" type="text" id="box5" className="form-control otpBox margin-box4" />    
            </div>

           </div>
           
           <span className="mt-5 text-danger">{boxError}</span>


           <div className="row mt-5">
                <div className="col-md-2">
                    <button onClick={backToCompanyForm} className="submitButton" type="button" >Back</button>
                </div>
                <div className="col-md-10">
                    <button disabled={btnValidation} onClick={submitHanlder} className="submitButton" type="button" >Finish</button>
                </div>
            </div>

            <hr className="mt-5" />

            <p className="text-center">Didn't receive the email? Check your spam filter for an email</p>
            <p className="text-center"> from <span className="text-danger">name@domain.com </span></p>

        </div>
    )

}


export default OTPForm;