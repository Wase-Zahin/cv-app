import React, {Component} from "react";

class University extends Component {
  render() {
  const {handleUniChange, uniItem} = this.props;
  return(
    <div className='educationalInp'>
      <p className="headerText">Education</p>
      <label htmlFor='university'></label>
      <input type="text" name="university" value={uniItem.name} onChange={handleUniChange} placeholder="University"></input>
      <label htmlFor='uniCity'></label>
      <input type="text" name="uniCity" value={uniItem.city} onChange={handleUniChange} placeholder="City, Province"></input>
      <label htmlFor='degree'></label>
      <input type="text" name="degree" value={uniItem.degree} onChange={handleUniChange} placeholder="Degree"></input>
      <label htmlFor='sub'></label>
      <input type="text" name="sub" value={uniItem.sub} onChange={handleUniChange} placeholder="Subject"></input>
      <label htmlFor='uniFrom'></label>
      <input type="text" name="uniFrom" value={uniItem.from} onChange={handleUniChange} placeholder="From"></input> 
      <label htmlFor='uniTo'></label>
      <input type="text" name="uniTo" value={uniItem.to} onChange={handleUniChange} placeholder="To"></input>
      <button type="button" className="delBtn" >Delete</button> 
    </div>
  )}
}

export default University;