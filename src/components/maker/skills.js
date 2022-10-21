import React, {Component} from "react";

class Skills extends Component {
  render() {
  const {id, skillsItem, onSkillsChange} = this.props;
  return(
    <div>
        <p className="headerText">Skills</p>
        <form className='skillsInp'>
            <label htmlFor='skill'></label>
            <input 
            type="text" 
            name="skill" 
            value={skillsItem.skill}
            onChange={(e) => onSkillsChange(e, id)}
            placeholder="Skill">
            </input>
        </form>
    </div>
  )}
}

export default Skills;