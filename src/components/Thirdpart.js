import { useState,useEffect } from "react";
import choseF from "./../img/Chosefile.png"
import Founders from "./Founders";
const Thirdpart = (props) => {

  const addElement = (element) => {
    setArray([...array, element]);
  }
  const onClickPlus=() => {addElement({onClick:onClickMinus})}
  const [array, setArray] = useState([{onClick:onClickPlus}]);

  const removeElement = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  }

  const onClickMinus=()=>{removeElement(1)}

    return (   
    <form classname="form"onSubmit={props.handleAddApplication}>
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
  </form>);
}
 
export default Thirdpart;