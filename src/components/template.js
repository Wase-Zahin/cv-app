import React, { Component } from "react";
import PersonalInfoTemplate from "./personalInfoTemplate";
import UniTemplate from "./universityTemplate";
import ExperienceTemplate from "./experienceTemplate";
import SkillsTemplate from "./skillsTemplate";
import ProjectsTemplate from "./projectsTemplate";
import InterestsTemplate from "./interestsTemplate";
class Template extends Component {
    render() {
        const {university, experience, personalInfo, onSubmitForm, handlePersonalInfoChange} = this.props;

        const uniItems = university.map((uniItem) => {
            return (
                <UniTemplate
                key={uniItem.id}
                id={uniItem.id}
                uniItem={uniItem}
                ></UniTemplate>
            )
        })

        const expItems = experience.map((expItem) => {
            return (
                <ExperienceTemplate
                key={expItem.id}
                id={expItem.id}
                expItem={expItem}
                ></ExperienceTemplate>
            )
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
                {expItems}
                <ProjectsTemplate></ProjectsTemplate>
                <InterestsTemplate></InterestsTemplate>
            </div>
        )
    }
}

export default Template;