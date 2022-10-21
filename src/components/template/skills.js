import React, { Component } from "react";
import SkillsItem from "./skillsItem";

class Skills extends Component {
    render() {
        const {skills} = this.props;
        const skillsItems = skills.map((skillsItem) => {
            return (
                <SkillsItem
                key={skillsItem.id}
                id={skillsItem.id}
                skillsItem={skillsItem}
                ></SkillsItem>
            )
        })

        return (
            <div className="skills">
                <p className="headerSkills">Skills</p><div className="hr"></div>
                {skillsItems}
            </div>
        )
    }
}

export default Skills;