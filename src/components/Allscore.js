import React from 'react'
import cc from "./../img/create.png"
import Rectan from "./../img/Rectangle 138.png"

function Allscore() {
  return (
    <div className='Allscore'>
    <div className='header1'>
        <div className='scpetqa123'>
            <h1 className='scSss' >Scores</h1>
            <img className='sccbtn' src={cc}/>
        </div>
    </div>
    <div className='sccontainerforapk' >
        <h1 className='scSss'>Score 1</h1>
        <img  src={Rectan}/>
    </div>
    <div className='sccontainerforapk' >
        <h1 className='scSss'>Score 1</h1>
        <img  src={Rectan}/>
    </div>
    <div className='sccontainerforapk' >
        <h1 className='scSss'>Score1</h1>
        <img className='entbtn' src={Rectan}/>
    </div>
    </div>
  )
}

export default Allscore