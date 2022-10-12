import React, {Component} from "react";
import PersonalInfo from "./personalInfo";
import University from "./university";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Interests from "./interests";
class Maker extends Component {
    render() {
    const {addUniFn, id, university} = this.props;

    const uniItems = university.map((uniItem) => {
        <University>
        key={uniItem.id}
        id={uniItem.id}
        uniItem={uniItem}
        </University>
    })
    return(
        <div className='maker'>
            <PersonalInfo/>
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