import React, {Component} from "react";

class Interests extends Component {
  render() {
  const {id, interestsItem, onInterestsChange} = this.props;
  return(
    <div>
        <p className="headerText">Interests</p>
        <form className='interest'>
            <label htmlFor='interest'></label>
            <input type="text" 
            name="interest" 
            value={interestsItem.interest}
            onChange={(e) => onInterestsChange(e, id)} 
            placeholder="Interest"></input>
        </form>
    </div>
  )}
}

export default Interests;