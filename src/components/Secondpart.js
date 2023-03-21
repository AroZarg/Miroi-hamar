const Secondpart = (props) => {
    return (   
 <form classname="form"onSubmit={props.handleAddApplication}>
    <label className="inputs">
     <span className="xs">Rounds raised</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Current value estimate</span>
      <input className='in' type="email" name="email" required />
    </label>
    <label className="inputs">
    <span className="xs">Planned revenue in 1 year</span>
      <input className='in' type="tel" name="phone" required />
    </label>
    <label className="inputs">
    <span className="xs">Planned revenue in 2 year</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Planned revenue in 3 year</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Funds received</span>
      <input className='in' list="list" name="name" required />
        <datalist id ='list'>
            <option value="Series (DD)"/>
            <option  value="Series (DD)"/>
            <option value="Series (DD)"/>
        </datalist>
    </label>
    <label className="inputs">
    <span className="xs">Runaway months</span>
      <input className='in' type="text" name="name" required />
    </label>
    <label className="inputs">
    <span className="xs">Desired amount to raise</span>
      <input className='in' type="text" name="name" required />
    </label>
    <button className='btn' type="submit">Next</button>
  </form>
  );
}
 
export default Secondpart;