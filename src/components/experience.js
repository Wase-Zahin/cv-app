import React, {Component} from "react";

class Experience extends Component {
  render() {
  const {id, expItem, onCompChange} = this.props;
  return(
    <div className='professionalInp'>
        <p className="headerText">Experience</p>
        <input 
        type="text" 
        name="position" 
        value={expItem.position} 
        onChange={(e) => onCompChange(e, id)} 
        placeholder="Position"></input>

        <input 
        type="text" 
        name="company" 
        value={expItem.company} 
        onChange={(e) => onCompChange(e, id)} 
        placeholder="Company"></input>

        <input 
        type="text" 
        name="city" 
        value={expItem.city} 
        onChange={(e) => onCompChange(e, id)} 
        placeholder="City"></input>
        
        <input 
        type="text" 
        name="from" 
        value={expItem.from} 
        onChange={(e) => onCompChange(e, id)} 
        placeholder="From"></input>

        <input 
        type="text" 
        name="to" 
        value={expItem.to} 
        onChange={(e) => onCompChange(e, id)} 
        placeholder="To"></input> 
        <button type="button" className="delBtn" >Delete</button> 
    </div>
  )}
}

export default Experience;