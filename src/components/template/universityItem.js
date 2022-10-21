import React, {Component} from "react";

class UniversityItem extends Component {
    render() {
    const {uniItem} = this.props;
    return(
        <div>
            <div className="university">
                <p className="universityName">
                    {uniItem.name || 'Your university name'}- 
                    {uniItem.degree || ' degree'}
                </p>
                <p className="duration">
                    {uniItem.from || 'From '}- 
                    {uniItem.to || ' To'}
                </p>
            </div>

            <div className="courses">
                <li>Courses: Name All Of Your Courses</li>
                <li>Things like your achievements and activities</li>
            </div>
        </div>
    )}
}

export default UniversityItem;