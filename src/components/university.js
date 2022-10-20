import React, {Component} from "react";

class University extends Component {
  render() {
  const {id, onChange, uniItem} = this.props;
  return(
    <div className='educationalInp'>
      <p className="headerText">Education</p>
      
      <input 
      type="text" 
      name="name" 
      value={uniItem.name} 
      onChange={(e) => onChange(e, id)} 
      placeholder="University">
      </input>

      <input 
      type="text" 
      name="city" 
      value={uniItem.city} 
      onChange={(e) => onChange(e, id)} 
      placeholder="City, Province">
      </input>

      <input 
      type="text" 
      name="degree" 
      value={uniItem.degree} 
      onChange={(e) => onChange(e, id)} 
      placeholder="Degree">
      </input>

      <input 
      type="text" 
      name="sub" 
      value={uniItem.sub} 
      onChange={(e) => onChange(e, id)} 
      placeholder="Subject">
      </input>

      <input 
      type="text" 
      name="from" 
      value={uniItem.from} 
      onChange={(e) => onChange(e, id)} 
      placeholder="From">
      </input> 

      <input 
      type="text" 
      name="to" 
      value={uniItem.to} 
      onChange={(e) => onChange(e, id)} 
      placeholder="To">
      </input>
      <button type="button" className="delBtn" >Delete</button> 
    </div>
  )}
}

export default University;