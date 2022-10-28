import React, {Component} from "react";

class UniversityItem extends Component {
    render() {
    const {uniItem} = this.props;
    return(
        <div>
            <div className="university">
                <p className="universityName">
                    {uniItem.name || 'Your university name'} - {uniItem.degree || ' Degree'}, {uniItem.city || 'City'}
                </p>
                <p className="duration">
                    {uniItem.from || 'From '} - {uniItem.to || ' To'}
                </p>
            </div>

            <div className="courses">
                <li>Courses: {uniItem.courses || 'Name All Of Your Courses'}</li>
                <li>{uniItem.achievements || 'Achievements: List Your Achievements'}</li>
            </div>
        </div>
    )}
}

export default UniversityItem;