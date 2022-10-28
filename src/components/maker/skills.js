import React, {Component} from "react";

class Skills extends Component {
  render() {
  const {id, skillsItem, onSkillsChange, handleSkillsDelete} = this.props;
  return(
    <div className='skillsInp'>
      <input 
      type="text" 
      name="skill" 
      value={skillsItem.skill}
      onChange={(e) => onSkillsChange(e, id)}
      placeholder="Skill">
      </input>
      <button type="button" className="delBtn" onClick={() => handleSkillsDelete(id)}>Delete</button> 
    </div>
  )}
}

export default Skills;