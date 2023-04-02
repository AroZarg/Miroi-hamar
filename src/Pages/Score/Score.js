import React from 'react'
import Header from '../../components/Header';
import Multic from "../../components/Multic"
import { useState } from 'react';
import "./Score.css"
import Score1 from '../../components/Score1';
import Score2 from '../../components/ Score2';
import Allscore from '../../components/Allscore';

function Score() {
    const [clicked,isClicked] = useState(false)

    const onClick = ()=>{
      return !clicked?isClicked(true):isClicked(false) 
    }
    
  return (
<>
<Header onClick={onClick}/>
<div className='score-container'>
    {clicked?<Multic/>:null}
<Score1/>
{/* <Score2/> */}
{/* <Allscore/> */}
</div> 

</>
  );
}

export default Score