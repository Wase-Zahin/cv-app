import React, { Component } from "react";
import PersonalInfoTemplate from "./personalInfoTemplate";
import UniTemplate from "./universityTemplate";
import SkillsTemplate from "./skillsTemplate";
import ExperienceTemplate from "./experienceTemplate";
import ProjectsTemplate from "./projectsTemplate";
import InterestsTemplate from "./interestsTemplate";
class Template extends Component {
    render() {
        const {university, personalInfo, onSubmitForm, handlePersonalInfoChange} = this.props;
        const uniItems = university.map((uniItem) => {
            return uniItem;
        })
        return (
            <div className='template'>

                <PersonalInfoTemplate
                handlePersonalInfoChange={handlePersonalInfoChange}
                onSubmitForm={onSubmitForm}
                personalInfo={personalInfo}
                ></PersonalInfoTemplate>

                {uniItems}
                <SkillsTemplate></SkillsTemplate>
                <ExperienceTemplate></ExperienceTemplate>
                <ProjectsTemplate></ProjectsTemplate>
                <InterestsTemplate></InterestsTemplate>
            </div>
        )
    }
}

export default Template;