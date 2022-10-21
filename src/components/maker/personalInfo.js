import React, {Component} from "react";

class PersonalInfo extends Component {
  render() {
  const {handlePersonalInfoChange, personalInfo} = this.props;
  return(
    <div className="personalInp">
        <p className="headerText">Personal Information</p>

        <input 
        type="text" 
        name="firstName" 
        value={personalInfo.firstName} 
        onChange={(e) => handlePersonalInfoChange(e)} 
        placeholder="First Name">
        </input>

        <input 
        type="text" 
        name="lastName" 
        value={personalInfo.lastName} 
        onChange={handlePersonalInfoChange} 
        placeholder="Last Name">
        </input>

        <input 
        type="text"
        name="title" 
        value={personalInfo.title} 
        onChange={handlePersonalInfoChange}  
        placeholder="Title">
        </input>

        <input 
        type="text" 
        name="phoneNo" 
        value={personalInfo.phoneNo} 
        onChange={handlePersonalInfoChange}  
        placeholder="Phone Number">
        </input>

        <input 
        type="text" 
        name="email" 
        value={personalInfo.email} 
        onChange={handlePersonalInfoChange}  
        placeholder="Email Address">
        </input> 

        <input 
        type="text" 
        name="address" 
        value={personalInfo.address} 
        onChange={handlePersonalInfoChange} 
        placeholder="Address">
        </input>
    </div>
  )}
}

export default PersonalInfo;