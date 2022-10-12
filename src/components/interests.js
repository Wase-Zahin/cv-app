import React, {Component} from "react";

class Interests extends Component {
  render() {
  const {experience, handlePersonalInfoChange} = this.props;
  return(
    <div>
        <p className="headerText">Interests</p>
        <form className='interest'>
            <label htmlFor='interest'></label>
            <input type="text" name="interest" onChange={handlePersonalInfoChange} placeholder="Interest"></input>
        </form>
    </div>
  )}
}

export default Interests;