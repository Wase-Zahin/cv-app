import React, {Component} from "react";

class Projects extends Component {
  render() {
  const {experience, handlePersonalInfoChange} = this.props;
  return(
    <div>
        <p className="headerText">Projects</p>
        <form className='projects'>
            <label htmlFor='projects'></label>
            <input type="text" name="projects" onChange={handlePersonalInfoChange} placeholder="Project"></input>
        </form>
    </div>
  )}
}

export default Projects;