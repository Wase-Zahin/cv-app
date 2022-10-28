import React, { Component } from "react";

class PersonalInfo extends Component {
    render() {
        const {personalInfo} = this.props;

        return (
            <div className='personalInfo'>
                <p className="name">
                    {personalInfo.firstName || 'Your'} {personalInfo.lastName || ' Name'}
                </p>

                <p className="title">
                    {personalInfo.title || 'Job Title'}
                </p>

                <div className="address">
                    <li>{personalInfo.address || '123 Your street , Your city ABCD'}</li>  
                    <li>{personalInfo.phoneNo || 'Your Phone Number'}</li>
                    <li>{personalInfo.email || 'Your email Address'}</li>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;