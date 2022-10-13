import React, {Component} from "react";
import PersonalInfo from "./personalInfo";
import University from "./university";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Interests from "./interests";
class Maker extends Component {
    render() {
    const {addUniFn, university, handleUniChange, onSubmitForm,
          handlePersonalInfoChange, personalInfo} = this.props;

    const uniItems = university.map((uniItem) => {
        return (
            <University
            key={uniItem.id}
            id={uniItem.id}
            name={uniItem.name}
            uniItem={uniItem}
            handleUniChange={handleUniChange}
            ></University>
        )
    })

    return(
        <div className='maker'>
            <PersonalInfo onSubmitForm={onSubmitForm}
            handlePersonalInfoChange={handlePersonalInfoChange}
            personalInfo={personalInfo}/>

            {uniItems}
            <button type="button" className="addBtn" onClick={addUniFn}>Add</button>
            <Experience/>
            <Skills/>
            <Projects/>
            <Interests/>            
        </div>
        )
    }
}
export default Maker;