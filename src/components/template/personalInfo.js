import React, { Component } from "react";

class PersonalInfo extends Component {
    render() {
        const {personalInfo} = this.props;

        return (
            <div className='personalInfo'>
                <p className="name">
                    {personalInfo.firstName || 'Your'} 
                    {personalInfo.lastName || ' Name'}
                </p>

                <p className="title">
                    {personalInfo.title || 'Job Title'}
                </p>

                <p className="address">
                    {personalInfo.address || '123 Your street , Your city ABCD'} • 
                    <li>{personalInfo.phoneNo || 'Your Phone Number'}</li>•
                    <li>{personalInfo.email || 'Your email Address'}</li></p>
            </div>
        )
    }
}

export default PersonalInfo;