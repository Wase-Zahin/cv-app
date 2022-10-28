import React, { Component } from "react";
import Projects from "./projects";
import Interests from "./interests";
import Skills from "./skills";
import Experience from "./experience";
import University from "./university";
import PersonalInfo from "./personalInfo";

class TemplateItem extends Component {
    render() {
        const {university, experience, personalInfo, skills, interests, projects} = this.props;
        return (
            <div>
                <div id="template">
                <PersonalInfo personalInfo={personalInfo}></PersonalInfo>
                <University university={university}></University>
                <Skills skills={skills}></Skills>
                <Experience experience={experience}></Experience>
                <Projects projects={projects}></Projects>
                <Interests interests={interests}></Interests>
                </div>
            </div>
        )
    }
}

export default TemplateItem;

