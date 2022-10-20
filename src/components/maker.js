import React, {Component} from "react";
import PersonalInfo from "./personalInfo";
import University from "./university";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Interests from "./interests";
class Maker extends Component {
    render() {
    const {addUniFn, university, onChange, onCompChange, onSubmitForm,
          handlePersonalInfoChange, personalInfo, experience, addCompFn} = this.props;

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
            <Skills/>
            <Projects/>
            <Interests/>            
        </div>
        )
    }
}
export default Maker;