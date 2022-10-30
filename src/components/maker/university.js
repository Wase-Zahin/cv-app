import React, {Component} from "react";

class University extends Component {
  render() {
  const {id, onChange, uniItem, handleUniDelete} = this.props;
  return(
    <div className='educationalInp'>
      <input 
      type="text" 
      name="name" 
      value={uniItem.name} 
      onChange={(e) => onChange(e, id)} 
      placeholder="University">
      </input>

      <input 
      type="text" 
      name="city" 
      value={uniItem.city} 
      onChange={(e) => onChange(e, id)} 
      placeholder="City, Province">
      </input>

      <input 
      type="text" 
      name="degree" 
      value={uniItem.degree} 
      onChange={(e) => onChange(e, id)} 
      placeholder="Degree">
      </input>

      <input 
      type="text" 
      name="courses" 
      value={uniItem.courses} 
      onChange={(e) => onChange(e, id)} 
      placeholder="Courses">
      </input>

      <input 
      type="text" 
      name="achievements" 
      value={uniItem.achievements} 
      onChange={(e) => onChange(e, id)} 
      placeholder="Achievements">
      </input>

      <input 
      type="text" 
      name="from" 
      value={uniItem.from} 
      onChange={(e) => onChange(e, id)} 
      placeholder="From">
      </input> 

      <input 
      type="text" 
      name="to" 
      value={uniItem.to} 
      onChange={(e) => onChange(e, id)} 
      placeholder="To">
      </input>
      <button type="button" className="delBtn" onClick={() => handleUniDelete(id)}>Delete</button> 
    </div>
  )}
}

export default University;