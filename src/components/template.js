import React, { Component } from "react";
import UniTemplate from "./uniTemplate";

class Template extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {firstName, lastName, title, phoneNo, email, address,
               university, uniCity, degree, sub, uniFrom, uniTo,
               position, company, expCity, expFrom, expTo, uniTemplateState} = this.props;
        return (
            <div className='template'>
                <p className="name">{firstName || 'Your'} {lastName || 'Name'}</p>
                <p className="title">{title || 'Job Title'}</p>
                <p className="address">{address || '123 Your street, Your city ABCD'}, {phoneNo || ', Your Phone Number'}, {email || ', Your email Address'}</p>

                <p className="headerEdu">Education</p><div className="hr"></div>
                <div className="university">
                    <p className="universityName">{university || 'Your university name'} - {degree || 'degree'}</p>
                    <p className="duration">{uniFrom || 'From'} - {uniTo || 'To'}</p>
                </div>
                <div className="courses">
                    <li>Courses: Name All Of Your Courses</li>
                    <li>Things like your achievements and activities</li>
                    {uniTemplateState.map(component => <UniTemplate key={component.key}/>)}
                </div>
                
                <p className="headerSkills">Skills</p><div className="hr"></div>
                <div className="skillsDiv">
                    <li>Your skills</li>
                    <li>More skills</li>
                </div>

                <div className="professionalExp">
                    <p className="headerProfExp">Professional Experience</p><div className="hr"></div>
                    <div className="jobTitleCity">
                        <p className="jobTitle">{position || 'The title of your job in the company'}</p>
                        <p className="jobLocation">{expCity || 'City, Province'}</p>
                    </div>
                    <div className="jobNameDuration">
                        <p className="companyName">{company || 'Company Name'}</p>
                        <p>{expFrom || 'From'} - {expTo || 'To'}</p>
                    </div>
                    <div className="companyWorks">
                        <li>Relevant works</li>
                        <li>More Relevant works</li>
                    </div>
                </div>

                <div className="projects">
                    <p className="headerProjects">Projects</p><div className="hr"></div>
                    <div className="projectWorks">
                        <li>list your projects</li>
                        <li>more projects</li>
                    </div>
                </div>

                <div className="Interests">
                    <p className="headerInterests">Interests</p><div className="hr"></div>
                    <div className="interestNames">
                        <li>your Interests</li>
                        <li>more Interests</li>
                    </div>
                </div>
                {/*<img className="image" src={image}/>
                <input type="file" name="myImage" onChange={this.onImageChange}></input>*/}
            </div>
        )
    }
}

export default Template;