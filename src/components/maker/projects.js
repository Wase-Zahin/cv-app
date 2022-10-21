import React, {Component} from "react";

class Projects extends Component {
  render() {
  const {id, projectsItem, onProjectsChange} = this.props;
  return(
    <div>
        <p className="headerText">Projects</p>
        <form className='projects'>
            <label htmlFor='projects'></label>
            <input 
            type="text" 
            name="project" 
            value={projectsItem.project}
            onChange={(e) => onProjectsChange(e, id)}
            placeholder="Project"></input>
        </form>
    </div>
  )}
}

export default Projects;