import React from 'react'
import { Checkbox } from '@material-ui/core';
import Stepper  from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
const steps = [
  'Step1',
  'Step2',
  'Step3',
];


function Firstpaart() {
  const [applications, setApplications] = useState([]);
  const handleAddApplication = (e) => {
    e.preventDefault();
    const newApplication = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      resume: e.target.resume.value,
    };
    setApplications([...applications, newApplication]);
    e.target.reset();
  };
  return (
  <>
  <div className='container'>
    <div className='pageName'>
    <h1 className='headerName'>Application</h1>
    <Stepper className='steps' activeStep={0} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
 </div>
  
    <form classname="form"onSubmit={handleAddApplication}>
    <label className="inputs">
     <span className="xs">Startup name</span>
      <input className='in' type="text" name="startupName" required />
    </label>
    <label className="inputs">
    <span className="xs">Year fonded</span>
      <input className='in' type="text" name="yearFounded" required />
    </label>
    <label className="inputs">
    <span className="xs">Website</span>
      <input className='in' type="URL" name="website" required />
    </label>
    <label className="inputs">
    <span className="xs">Linkedin</span>
      <input className='in' type="URL" name="linkedin" required />
    </label>
    <label className="inputs">
    <span className="xs">Demo Video URL</span>
      <input className='in' type="URL" name="demoVideoUrl" required />
    </label>
    <label className="inputs">
    <span className="xs">Industry</span>
      <input className='in' type="number" name="industry" required />
    </label>
    <label className="inputs">
    <span className="xs">Business model</span>
      <input className='in' type="text" name="businessModel" required />
    </label>
    <label className="inputs">
    <span className="xs">Funding stage</span>
      <input className='in' type="text" name="fundingStage" required />
    </label>
    <label className="inputs">
    <span className="xs">IP registered</span>
      <input className='in' type="number" name="ipRegistred" required />
    </label>
    <div className='finished'>
    <span>Company incorporated?</span>
    <div className='ss'>
      <Checkbox></Checkbox>
        <span>Yes</span>
      <Checkbox></Checkbox>
      <span>No</span>
     </div>
    </div>
    <button className='btn' type="submit">Next</button>
  </form>
  </div>    
  </>
  )
}

export default Firstpaart