import React, {Component} from "react";

class UniMaker extends Component {
    constructor(props) {
      super(props);
    }

    render() {
    const {onSubmitForm, handleChange, formVal, add, addArr} = this.props;
    return(
      <div className="educationalInp">
        <label htmlFor='university'></label>
        <input type="text" name="university" value={formVal} onChange={handleChange} placeholder="University"></input>
        <label htmlFor='uniCity'></label>
        <input type="text" name="uniCity" value={formVal} onChange={handleChange} placeholder="City, Province"></input>
        <label htmlFor='degree'></label>
        <input type="text" name="degree" value={formVal} onChange={handleChange} placeholder="Degree"></input>
        <label htmlFor='sub'></label>
        <input type="text" name="sub" value={formVal} onChange={handleChange} placeholder="Subject"></input>
        <label htmlFor='uniFrom'></label>
        <input type="text" name="uniFrom" value={formVal} onChange={handleChange} placeholder="From"></input> 
        <label htmlFor='uniTo'></label>
        <input type="text" name="uniTo" value={formVal} onChange={handleChange} placeholder="To"></input>
        <button type="button" className="delBtn">Delete</button> 
      </div>
    )}
}

export default UniMaker;