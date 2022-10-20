import React, { Component } from "react";

class ExperienceTemplate extends Component {
    render() {
        const {expItem} = this.props;

        return (
            <div className="professionalExp">
                <p className="headerProfExp">Professional Experience</p>
                <div className="hr"></div>

                <div className="jobTitleCity">
                    <p className="jobTitle">
                        {expItem.position || 'The title of your job in the company'}
                    </p>
                    <p className="jobLocation">
                        {expItem.city || 'City, Province'}
                    </p>
                </div>

                <div className="jobNameDuration">
                    <p className="companyName">
                        {expItem.company || 'Company Name'}
                    </p>
                    <p>
                        {expItem.from || 'From'} - 
                        {expItem.to || 'To'}
                    </p>
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