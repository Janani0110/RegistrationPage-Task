import React, { useState, useEffect} from 'react';

// Csss
import '../PersonalForm/PersonalForm.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const Company = ({ companyFormValues, backToForm }) => { 

    const [image, setImage] = useState(null);
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobExperience, setJobExperience] = useState('');

    // State For Error or Invalie
    const [imageError, setImageError] = useState(null);
    const [companyNameError, setCompanyNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [jobTitleError, setJobTitleError] = useState('');
    const [jobExperienceError, setJobExperienceError] = useState('');

    useEffect(() => {
        if (localStorage.getItem('CompanyForm')) {
            const companyFormData = JSON.parse(localStorage.getItem('CompanyForm'));
            setImage(companyFormData.image);
            setCompanyName(companyFormData.companyName);
            setEmail(companyFormData.email);
            setJobTitle(companyFormData.jobTitle);
            setJobExperience(companyFormData.jobExperience);
        }
    }, [])

    // Handler
    const imageHandler = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files[0]);
        console.log(image);
        setImageError('');
    }

    const companyNameHandler = (event) => {
        setCompanyName(event.target.value);
        setCompanyNameError('');
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
        setEmailError('');
    }

    const jobTitleHandler = (event) => {
        setJobTitle(event.target.value);
        setJobTitleError('');
    }

    const jobExperiencHandler = (event) => {
        setJobExperience(event.target.value);
        setJobExperienceError('');
    }

    const backToPersonalForm = () => {
        backToForm({name: 'PersonalForm'})
    }

    const submit = () => {
        if (!image) {
            setImageError('Please Select the Image');
            return;
        }

        if (!companyName) {
            setCompanyNameError('Please enter the Company Name');
            return;
        }

        if (!email) {
            setEmailError('Please enter the Email Id');
            return;
        }

        if (!jobTitle) {
            setJobTitleError('Please enter the Job Title');
            return;
        }

        if (!jobExperience) {
            setJobExperienceError('Please enter the job Experience');
            return;
        }

        const companyFormData = {
            image: image,
            companyName: companyName,
            email: email,
            jobTitle: jobTitle,
            jobExperience: jobExperience
        }

        localStorage.setItem('CompanyForm', JSON.stringify(companyFormData));

        companyFormValues(true);
    }

    return (
        <div className="p-5">

            <div className="row">
                
                <div className="col-md-6">
                    <input type="file" onChange={imageHandler} />
                </div>
        
                {image && <div className="col-md-6">
                    <div className="image-preview">
                        <img src={image} />
                    </div>
                </div>}

            </div>

            <div className="form-row mb-4 mt-3">
                <label>Company name</label>
                <div className="col">
                    <input type="text" value={companyName} onChange={companyNameHandler}  className="form-control" />
                </div>
            </div>

            {/* Email Id */}
            <div className="form-row mb-4">
                <label>E mail</label>
                <div className="col">
                    <input  type="text" value={email} onChange={emailHandler} className="form-control" />
                </div>
            </div>

            {/* Job Title */}
            <div className="form-row mb-4">
                <label>Job title</label>
                <div className="col">
                    <input  type="text" value={jobTitle} onChange={jobTitleHandler} className="form-control" />
                </div>
            </div>

            {/* Job Experiance */}
            <div className="form-row mb-4">
                <label>JobExperience</label>
                <div className="col">
                    <input  type="text" value={jobExperience} onChange={jobExperiencHandler} className="form-control" />
                </div>
            </div>

            <div className="row">

                <div className="col-md-4">
                    <button  type="button" onClick={backToPersonalForm} className="submitButton">Back</button>
                </div>

                <div className="col-md-8">
                    <button type="button" onClick={submit} className="submitButton">Send OTP</button>
                </div>

            </div>

        </div>
    )
}


export default Company;
