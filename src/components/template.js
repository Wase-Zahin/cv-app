import React, { Component } from "react";

class Template extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {firstName, lastName, title, phoneNo, email, address} = this.props;
        return (
            <div className='template'>
                <p className="name">{firstName || 'Your name'}</p>
                <p className="title">{title || 'Job Title'}</p>
                <p className="address">{'123 Your street, Your city ABCD + Your Phone Number + Your email Address'}</p>
                <p className="headerEdu">Education</p><div className="hr"></div>
                <div className="university">
                    <p className="universityName">Your university name and degree</p>
                    <p className="duration">From - To</p>
                </div>
                <div className="courses">
                    <li>Courses: Name All Of Your Courses</li>
                    <li>Things like your achievements and activities</li>
                </div>
                <p className="headerSkills">Skills</p><div className="hr"></div>
                <div className="skillsDiv">
                    <li>Your skills</li>
                    <li>More skills</li>
                </div>

                <div className="professionalExp">
                    <p className="headerProfExp">Professional Experience</p><div className="hr"></div>
                    <div className="jobTitleCity">
                        <p className="jobTitle">The title of your job in the company</p>
                        <p className="jobLocation">City, Province</p>
                    </div>
                    <div className="jobNameDuration">
                        <p className="companyName">Company Name</p>
                        <p>From - To</p>
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