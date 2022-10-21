import React, {Component} from "react";
import PersonalInfo from "./personalInfo";
import University from "./university";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Interests from "./interests";
class Maker extends Component {
    render() {
    const {addUniFn, university, onChange, onCompChange, onSubmitForm, onSkillsChange, projects,
          handlePersonalInfoChange, personalInfo, experience, addCompFn, skills, addSkillsFn,
          addProjectsFn, onProjectsChange, onInterestsChange, addInterestsFn, interests} = this.props;

    const uniItems = university.map((uniItem) => {
        return (
            <University
            key={uniItem.id}
            id={uniItem.id}
            uniItem={uniItem}
            onChange={onChange}
            ></University>
        )
    })

    const expItems = experience.map((expItem) => {
        return (
            <Experience
            key={expItem.id}
            id={expItem.id}
            expItem={expItem}
            onCompChange={onCompChange}
            ></Experience>
        )
    })

    const skillsItems = skills.map((skillsItem) => {
        return (
            <Skills
            key={skillsItem.id}
            id={skillsItem.id}
            skillsItem={skillsItem}
            onSkillsChange={onSkillsChange}
            ></Skills>
        )
    })

    const projectsItems = projects.map((projectsItem) => {
        return (
            <Projects
            key={projectsItem.id}
            id={projectsItem.id}
            projectsItem={projectsItem}
            onProjectsChange={onProjectsChange}
            ></Projects>
        )
    })

    const interestsItems = interests.map((interestsItem) => {
        return (
            <Interests
            key={interestsItem.id}
            id={interestsItem.id}
            interestsItem={interestsItem}
            onInterestsChange={onInterestsChange}
            ></Interests>
        )
    })

    return(
        <div className='maker'>
            <PersonalInfo 
            onSubmitForm={onSubmitForm}
            handlePersonalInfoChange={handlePersonalInfoChange}
            personalInfo={personalInfo}
            />

            {uniItems}
            <button type="button" className="addBtn" onClick={addUniFn}>Add</button>

            {expItems}
            <button type="button" className="addBtn" onClick={addCompFn}>Add</button>

            {skillsItems}
            <button type="button" className="addBtn" onClick={addSkillsFn}>Add</button>
            
            {projectsItems}
            <button type="button" className="addBtn" onClick={addProjectsFn}>Add</button>
            
            {interestsItems}      
            <button type="button" className="addBtn" onClick={addInterestsFn}>Add</button>      
        </div>
        )
    }
}
export default Maker;