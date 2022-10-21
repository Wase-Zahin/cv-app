import React, { Component } from "react";

class SkillsItem extends Component {
    render() {
        const {skillsItem} = this.props;

        return (
            <div className="skillsDiv">
                <li>{skillsItem.skill || "Your Skills"}</li>
            </div>
        )
    }
}

export default SkillsItem;