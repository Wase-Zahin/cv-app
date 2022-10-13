import React, { Component } from "react";
import Skills from "./skills";

class SkillsTemplate extends Component {
    render() {
        const {firstName, lastName, title, phoneNo, email, address} = this.props;

        return (
            <div>
                <p className="headerSkills">Skills</p><div className="hr"></div>
                <div className="skillsDiv">
                    <li>Your skills</li>
                    <li>More skills</li>
                </div>
            </div>
        )
    }
}

export default SkillsTemplate;