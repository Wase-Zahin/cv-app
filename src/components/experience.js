import React, {Component} from "react";

class Experience extends Component {
  render() {
  const {experience, handlePersonalInfoChange} = this.props;
  return(
    <div>
        <p className="headerText">Experience</p>
        <form className='professionalInp'>
            <label htmlFor='position'></label>
            <input type="text" name="position" value={experience} onChange={handlePersonalInfoChange} placeholder="Position"></input>
            <label htmlFor='company'></label>
            <input type="text" name="company" value={experience} onChange={handlePersonalInfoChange} placeholder="Company"></input>
            <label htmlFor='expCity'></label>
            <input type="text" name="expCity" value={experience} onChange={handlePersonalInfoChange} placeholder="City"></input>
            <label htmlFor='expFrom'></label>
            <input type="text" name="expFrom" value={experience} onChange={handlePersonalInfoChange} placeholder="From"></input>
            <label htmlFor='expTo'></label>
            <input type="text" name="expTo" value={experience} onChange={handlePersonalInfoChange} placeholder="To"></input> 
        </form>
    </div>
  )}
}

export default Experience;