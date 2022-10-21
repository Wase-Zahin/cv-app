import React, { Component } from "react";
import Projects from "./projects";
import Interests from "./interests";
import Skills from "./skills";
import Experience from "./experience";
import University from "./university";
import PersonalInfo from "./personalInfo";

class Template extends Component {
    render() {
        const {university, experience, personalInfo, skills, interests, projects} = this.props;
        return (
            <div className='template'>
                <PersonalInfo personalInfo={personalInfo}></PersonalInfo>
                <University university={university}></University>
                <Skills skills={skills}></Skills>
                <Experience experience={experience}></Experience>
                <Projects projects={projects}></Projects>
                <Interests interests={interests}></Interests>
            </div>
        )
    }
}

export default Template;