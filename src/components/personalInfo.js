import React, {Component} from "react";

class PersonalInfo extends Component {
  render() {
  const {handlePersonalInfoChange, onSubmitForm, personalInfo} = this.props;
  return(
    <div className="personalInp">
        <p className="headerText">Personal Information</p>
        <label htmlFor='firstName'></label>
        <input type="text" name="firstName" value={personalInfo} onChange={handlePersonalInfoChange} placeholder="First Name"></input>
        <label htmlFor='lastName'></label>
        <input type="text" name="lastName" value={personalInfo} onChange={handlePersonalInfoChange} placeholder="Last Name"></input>
        <label htmlFor='title'></label>
        <input type="text" name="title" value={personalInfo} onChange={handlePersonalInfoChange}  placeholder="Title"></input>
        <label htmlFor='phoneNo'></label>
        <input type="text" name="phoneNo" value={personalInfo} onChange={handlePersonalInfoChange}  placeholder="Phone Number"></input>
        <label htmlFor='email'></label>
        <input type="text" name="email" value={personalInfo} onChange={handlePersonalInfoChange}  placeholder="Email Address"></input> 
        <label htmlFor='address'></label>
        <input type="text" name="address" value={personalInfo} onChange={handlePersonalInfoChange} placeholder="Address"></input>
        <button className="changeBtn" type="submit" onClick={onSubmitForm}>Change</button>
    </div>
  )}
}

export default PersonalInfo;