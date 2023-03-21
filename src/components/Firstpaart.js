import React from 'react'
import { Checkbox } from '@material-ui/core';

function Firstpaart(props) {
  return (
    <form classname="form"onSubmit={props.handleAddApplication}>
    <label className="inputs">
     <span className="xs">Startup name</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Year fonded</span>
      <input className='in' type="Date" name="date" required />
    </label>
    <label className="inputs">
    <span className="xs">Website</span>
      <input className='in' type="URL" name="url" required />
    </label>
    <label className="inputs">
    <span className="xs">Linkedin</span>
      <input className='in' type="URL" name="url" required />
    </label>
    <label className="inputs">
    <span className="xs">Demo Video URL</span>
      <input className='in' type="URL" name="url" required />
    </label>
    <label className="inputs">
    <span className="xs">Industry</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Business model</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Funding stage</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">IP registered</span>
      <input className='in' type="text" name="name" required />
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
  )
}

export default Firstpaart