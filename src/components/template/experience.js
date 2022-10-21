import React, { Component } from "react";
import ExperienceItem from "./experienceItem";

class Experience extends Component {
    render() {
        const {experience} = this.props;
        const expItems = experience.map((expItem) => {
            return (
                <ExperienceItem
                key={expItem.id}
                id={expItem.id}
                expItem={expItem}
                ></ExperienceItem>
            )
        })

        return (
            <div className="professionalExp">
                <p className="headerProfExp">Professional Experience</p>
                <div className="hr"></div>
                {expItems}
            </div>
        )
    }
}

export default Experience;