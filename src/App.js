import React, {useContext,useState, useEffect} from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Personal from './components/PersonalForm/PersonalForm';
import Company from './components/CompanyForm/CompanyForm';
import OTPForm from './components/OTPForm/OTPForm';


function App() {

  const [personalForm, setPersonalForm] = useState(true);
  const [companyForm, setCompanyForm] = useState(false);
  const [otpForm, setOtpForm] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('state')) {
      
      // Check the Current Form whether it is Company Form or OTP Forms

      if (localStorage.getItem('state') === 'companyForm') {
        setCompanyForm(true);
        setPersonalForm(false);
        setOtpForm(false);
      }

      if (localStorage.getItem('state') === 'otpForm') {
        setCompanyForm(false);
        setPersonalForm(false);
        setOtpForm(true);
      }

      if (localStorage.getItem('state') === 'personalForm') {
        setCompanyForm(false);
        setPersonalForm(true);
        setOtpForm(false);
      }

    }
  }, [])

  const personalFormValues = (value) => {
    if (value) {
      setCompanyForm(value);
      setPersonalForm(!value);
      localStorage.setItem('state', 'companyForm');
    }
  }

  const companyFormValues = (value) => {
    if (value) {
      setOtpForm(value);
      setCompanyForm(!value);
      setPersonalForm(!value);
      localStorage.setItem('state', 'otpForm')
    }
  }

  const OtpForm = (value) => {
    if (value) {
      localStorage.setItem('state', 'personalForm')
    }
  }

  const backToForm = (value) => {
    if (value) {
      if (value.name === 'PersonalForm') {
        setPersonalForm(true);
        setCompanyForm(false);
        setOtpForm(false);
        localStorage.setItem('state', 'personalForm')
      } else if (value.name === 'CompanyForm') {
        setCompanyForm(true);
        setPersonalForm(false);
        setOtpForm(false);
        localStorage.setItem('state', 'companyForm');
      }
    }
  }

  return (

    <div className="body-color">
      {/* Navbar */}
      <AppBar style={{ background: '#093e5c' }} position="static">
        <Toolbar>
          <Typography variant="h6" className="center" component="div" sx={{ flexGrow: 1 }}>
            1. Personal Details
          </Typography>
          <Typography variant="h6" className="center" component="div" sx={{ flexGrow: 1 }}>
            2. Company Details
          </Typography>
          <Typography variant="h6" className="center" component="div" sx={{ flexGrow: 1 }}>
            3. Email Verification
          </Typography>
        </Toolbar>
      </AppBar>

      {/* content */}

      <div className={"containers " + (otpForm ? "heights-otp" : "heights")}>

          { personalForm && <Personal personalFormsValues={personalFormValues}/> }

          { companyForm && <Company companyFormValues={companyFormValues} backToForm={backToForm}/> }

          { otpForm && <OTPForm OtpForm={OtpForm} backToForm={backToForm} />}

      </div>

    </div>
    
  );
}

export default App;
