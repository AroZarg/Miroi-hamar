import plus from "./../img/plus.png"
const Founders = (props) => {
      
    return (  
    <label className="inputs">
    <span className="xs">Founders</span>
    <div className="putin1">
     <input className='in' type="text" name="name" required />
     <img src={plus} onClick={props.onClick} className="pbtn"/>
     </div>
      
   </label> );
}
 
export default Founders;