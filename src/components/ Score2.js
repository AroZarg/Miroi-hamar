import React from 'react'
import DonutChart from 'react-donut-chart';

function Score2() {
  return (
    <form className='scorecontainer'>  
<h1 className='scoreheaderName'>Score</h1>
<div>
<DonutChart
className='chart'
  colors={['#95EFD0','#0A9D96']}
  data={[
    {
      value: 10,
      borderColor: "blue"
    },
    {
      value: 90,
    },
  ]}
/>;
</div>

<div className='scorwrap2'>
 <p className='paragraph'>Application 1</p> 
  <div>
  <h3 className='h3'>Technical and team</h3>
  <input className='inputsrang' type='range'/>
  </div>
  <div>
  <h3 className='h3'>Technical and team</h3>
  <input className='inputsrang' type='range'/>
  </div>
  <div>
  <h3 className='h3'>Technical and team</h3>
  <input className='inputsrang' type='range'/>
  </div>
  <div>
  <h3 className='h3'>Technical and team</h3>
  <input className='inputsrang' type='range'/>
  </div>
</div>
  <div className='petqavor'>
<div className=''>
  <h3>Things that you are great.</h3>
  <li>Point 1</li>
  <li>Point 1</li>
  <li>Point 1</li>
  <li>Point 1</li>
</div>
  </div>
  <div className='petqavor1'>
  <h3>Things to focus on to make you more competitive.</h3>
  <li>Point 1</li>
  <li>Point 1</li>
  <li>Point 1</li>
  <li>Point 1</li>
  </div>

  <button className='btn' type="submit">Apply</button>
</form>
  )
}

export default Score2