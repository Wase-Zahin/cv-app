import React, { Component } from "react";

class ExperienceTemplate extends Component {
    render() {
        const {position, expCity, company, expTo, expFrom} = this.props;

        return (
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
        )
    }
}

export default ExperienceTemplate;