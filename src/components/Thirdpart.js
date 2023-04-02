import { useState,useEffect } from "react";
import choseF from "./../img/Chosefile.png"
import Founders from "./Founders";
import Stepper  from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const steps = [
  'Step1',
  'Step2',
  'Step3',
];

const Thirdpart = (props) => {

  const addElement = (element) => {
    setArray([...array, element]);
  }
  const onClickPlus=() => {addElement({onClick:onClickMinus})}
  const [array, setArray] = useState([]);

  const removeElement = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  }

  const onClickMinus=()=>{removeElement(1)}

    return (  
      <>
      <div className='container'>
      <div className='pageName'>
      <h1 className='headerName'>Application</h1>
      <Stepper className='steps' activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
   </div>
     
    <form classname="form"onSubmit={props.handleAddApplication}>
      <Founders onClick={onClickPlus}/>
       {array.map((i)=> (<Founders onClick={i.onClick}/>))
       } 
    <label className="inputs">
    <span className="xs">Name</span>
      <input className='in' type="email" name="email" required />
    </label>
    <label className="inputs">
    <span className="xs">Email</span>
      <input className='in' type="email" name="phone" required />
    </label>
    <label className="inputs">
    <span className="xs">Linkedin URL</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Relevant industry experience</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Scientific experience</span>
      <input className='in' type="text" name="name" required />
    </label>
    <div className='finished'>
    <div className='ss'>
    <label for="file-input" className="inputs" >
     <input className ="chosef"type="file"/>
    </label>
    
     </div>
    </div>
    <button className='btn' type="submit">Apply</button>
  </form>
  </div>     
  </>
  );
}
 
export default Thirdpart;