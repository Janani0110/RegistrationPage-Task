import React, {useContext,useState, useEffect} from 'react';

// Csss
import './PersonalForm.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Country Json File
import countryData from '../../data/country.json';



const Personal = ({personalFormsValues}) => {
    
    // State For respective values
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [state, setState] = useState('');
    const [allCountry, setAllCountry] = useState(countryData);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneCode, setPhoneCode] = useState('');


    // State For Respective values when facing error;
    const [fullNameError, setFullNameError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [countryCodeError, setCountryCodeError] = useState('');
    const [stateError, setStateError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [phoneCodeError, setPhoneCodeError] = useState('');

    useEffect(() => {
        // console.log(countryData);
        // setCountry(countryData.AD);
        // console.log(country);
        if (localStorage.getItem('PersonalForm')) {
            const personalForm = JSON.parse(localStorage.getItem('PersonalForm'));
            console.log(personalForm);
            setFullName(personalForm.fullName);
            setGender(personalForm.gender);
            setCountryCode(personalForm.countryCode);
            setCountry(personalForm.country);
            setState(personalForm.state);
            setPhoneCode(personalForm.phoneCode);
            setPhoneNumber(personalForm.phoneNumber);
        }
    }, [])


    const fullNameHanlder = (event) => {
        setFullName(event.target.value);
        setFullNameError('');
    }

    const countryCodeHandler = (event) => {
        const country = allCountry.find(x => x.code === event.target.value);
        setCountry(country.country);
        setCountryCode(event.target.value);
        setPhoneCode(country.phoneCode);
        setCountryCodeError('')
    }

    const countryHandler = (event) => {
        const country = allCountry.find(x => x.country === event.target.value);
        setCountry(event.target.value);
        setCountryCode(country.code);
        setPhoneCode(country.phoneCode);
        setCountryError('')
    }

    const stateHandler = (event) => {
        setState(event.target.value);
        console.log(state);
        setStateError('');
    }

    const phoneCodeHandler = (event) => {
        const country = allCountry.find(x => x.phoneCode === event.target.value);
        setPhoneCode(event.target.value);
        setCountryCode(country.code);
        setCountry(country.country);
        setPhoneCodeError('');
    }

    const phoneNumberHandler = (event) => {
        setPhoneNumber(event.target.value);
        setPhoneNumberError('')
    }


    const submit = () => {
        
        console.log('Submit');
        console.log(!fullName);

        console.log({fullName});
        console.log({gender});
        console.log({country});
        console.log({state});
        console.log({countryCode});
        console.log({phoneNumber});
        console.log({phoneCode});

        if (!fullName) {
            setFullNameError('Please enter the Full Name');
            return;
        } 
        if (!gender) {
            setGenderError('Please select the Gender');
            return;
        } 
        if (!country) {
            setCountryCodeError('Please select the Country');
            return;
        } 
        if (!state) {
            setStateError('Please enter the State');
            return;
        } 
        if (!phoneNumber) {
            setPhoneNumberError('Please enter the Phone Number')
            return;
        }

        const personalFormData = {
            fullName: fullName,
            gender: gender,
            countryCode: countryCode,
            country: country,
            state: state,
            phoneCode: phoneCode,
            phoneNumber: phoneNumber
        }

        localStorage.setItem('PersonalForm', JSON.stringify(personalFormData));

        personalFormsValues(true);

    }
    
    return (
        <div>
            <form className="p-5" onSubmit={submit}>

                <div className="form-row mb-4">
                    <label>Full Name</label>
                    <div className="col">
                        <input type="text"value={fullName} onChange={fullNameHanlder} id="FormFullName" className="form-control" required />
                        <span className="text-danger">{fullNameError}</span>
                    </div>
                </div>


                <div className="form-row mb-4">
                    <label>Gender</label>
                    <div className="col">
                        <h6  onClick={() => {setGender('Male')}} className={"btn focus " + (gender === 'Male' ? 'border-color': '' )} > Male </h6>
                        <h6  onClick={() => {setGender('Female')}} className={"btn focus " + (gender === 'Female' ? 'border-color': '' )}> Female </h6>
                        <h6  onClick={() => {setGender('Others')}} className={"btn focus " + (gender === 'Others'? 'border-color': '' )}> Others </h6>
                    </div>
                    <span className="text-danger">{genderError}</span>
                </div>


                <div className="form-row mb-4">

                    <label>Country</label>

                    <div className="row">

                        <div className="col-md-3">
                            <select multiple={false} onChange={countryCodeHandler} value={countryCode}  className="form-control" aria-label="Default select example">
                                {
                                    countryData.map((country, index) => {
                                        return <option key={index} value={country.code}>{country.code}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-md-9">

                            <select multiple={false} onChange={countryHandler} value={country} className="form-control" aria-label="Default select example">
                                {
                                    countryData.map((country, index) => {
                                        return <option key={index} value={country.country}>{country.country}</option>
                                    })
                                }
                            </select>

                        </div>

                    </div>
                    <span className="text-danger">{countryError}</span>
                </div>


                <div className="form-row mb-4">
                    <label>State</label>
                    <div className="col">
                        <input type="text" value={state} onChange={stateHandler} id="FormFullName" className="form-control" required />
                        <span className="text-danger">{stateError}</span>
                    </div>
                </div>


                <div className="form-row mb-4">

                    <label>Phone Number</label>

                    <div className="row">

                        <div className="col-md-3">
                            <select multiple={false} onChange={phoneCodeHandler} value={phoneCode}  className="form-control" aria-label="Default select example">
                                {
                                    countryData.map((country, index) => {
                                        return <option key={index} value={country.phoneCode}>{country.phoneCode}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-md-9">
                            <input type="text" value={phoneNumber} onChange={phoneNumberHandler} id="FormFullName" className="form-control" required />
                        </div>

                    </div>
                    <span className="text-danger">{phoneNumberError}</span>
                </div>

                <button onClick={submit} type="button" className="submitButton">Next</button>               
            </form>
        </div>
    )

}

export default Personal;