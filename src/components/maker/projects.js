import React, {Component} from "react";

class Projects extends Component {
  render() {
  const {id, projectsItem, onProjectsChange, handleProjectsDelete} = this.props;
  return(
    <div className='projects'>
        <input 
        type="text" 
        name="project" 
        value={projectsItem.project}
        onChange={(e) => onProjectsChange(e, id)}
        placeholder="Project"></input>
        <button type="button" className="delBtn" onClick={() => handleProjectsDelete(id)}>Delete</button> 
    </div>
  )}
}

export default Projects;