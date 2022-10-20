import React, { Component } from "react";

class PersonalInfoTemplate extends Component {
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
                    {personalInfo.address || '123 Your street, Your city ABCD'}, 
                    {personalInfo.phoneNo || ' Your Phone Number'}, 
                    {personalInfo.email || ' Your email Address'}</p>
            </div>
        )
    }
}

export default PersonalInfoTemplate;