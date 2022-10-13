import React, {Component} from "react";

class UniTemplate extends Component {
    constructor(props) {
      super(props);
    }

    render() {
    const {degree, university, uniFrom, uniTo, uniCnt} = this.props;
    return(
        <div>
            <p className="headerEdu">Education</p>
            <div className="hr"></div>

            <div className="university">
                <p className="universityName">
                    {'university' || 'Your university name'} -  
                    {degree || ' degree'}
                </p>
                <p className="duration">
                    {uniFrom || 'From '} - 
                    {uniTo || ' To'}
                </p>
            </div>

            <div className="courses">
                <li>Courses: Name All Of Your Courses</li>
                <li>Things like your achievements and activities</li>
            </div>
        </div>
    )}
}

export default UniTemplate;