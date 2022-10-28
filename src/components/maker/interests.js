import React, {Component} from "react";

class Interests extends Component {
  render() {
  const {id, interestsItem, onInterestsChange, handleInterestsDelete} = this.props;
  return(
    <div className='interest'>
        <input type="text" 
        name="interest" 
        value={interestsItem.interest}
        onChange={(e) => onInterestsChange(e, id)} 
        placeholder="Interest"></input>
        <button type="button" className="delBtn" onClick={() => handleInterestsDelete(id)}>Delete</button> 
    </div>
  )}
}

export default Interests;