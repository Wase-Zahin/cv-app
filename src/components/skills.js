import React, {Component} from "react";

class Skills extends Component {
  render() {
  const {experience, handlePersonalInfoChange} = this.props;
  return(
    <div>
        <p className="headerText">Skills</p>
        <form className='skillsInp'>
            <label htmlFor='skill'></label>
            <input type="text" name="skill" onChange={handlePersonalInfoChange} placeholder="Skill"></input>
        </form>
    </div>
  )}
}

export default Skills;