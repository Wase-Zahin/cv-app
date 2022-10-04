import React, {Component} from "react";
import UniMaker from "./uni";

class Maker extends Component {
    constructor(props) {
      super(props);
    }

    
    render() {
    const {onSubmitForm, handleChange, formVal, add, uniMakerState} = this.props;

    return(
        <div className='maker'>
            <p className="headerText">Personal Information</p>
            <form onSubmit={onSubmitForm} className='personalInp'>
                <label htmlFor='firstName'></label>
                <input type="text" name="firstName" defaultValue={formVal} onChange={handleChange} placeholder="First Name"></input>
                <label htmlFor='lastName'></label>
                <input type="text" name="lastName" value={formVal} onChange={handleChange} placeholder="Last Name"></input>
                <label htmlFor='title'></label>
                <input type="text" name="title" value={formVal} onChange={handleChange}  placeholder="Title"></input>
                <label htmlFor='phoneNo'></label>
                <input type="text" name="phoneNo" value={formVal} onChange={handleChange}  placeholder="Phone Number"></input>
                <label htmlFor='email'></label>
                <input type="text" name="email" value={formVal} onChange={handleChange}  placeholder="Email Address"></input> 
                <label htmlFor='address'></label>
                <input type="text" name="address" value={formVal} onChange={handleChange} placeholder="Address"></input>
                <button className="changeBtn" type="submit">Change</button>
            </form>

            <p className="headerText">Education</p>
            <form className='educationalInp'>
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
                <button type="button" className="delBtn" >Delete</button> 
                {uniMakerState.map((component) => {
                    return <UniMaker formVal={formVal} handleChange={handleChange} key={component.key} p2={component.number}/>
                })}
                {'this is ' + this.props.firstName}
                <button type="button" className="addBtn" onClick={add}>Add</button>
            </form>

            <p className="headerText">Experience</p>
            <form className='professionalInp'>
                <label htmlFor='position'></label>
                <input type="text" name="position" value={formVal} onChange={handleChange} placeholder="Position"></input>
                <label htmlFor='company'></label>
                <input type="text" name="company" value={formVal} onChange={handleChange} placeholder="Company"></input>
                <label htmlFor='expCity'></label>
                <input type="text" name="expCity" value={formVal} onChange={handleChange} placeholder="City"></input>
                <label htmlFor='expFrom'></label>
                <input type="text" name="expFrom" value={formVal} onChange={handleChange} placeholder="From"></input>
                <label htmlFor='expTo'></label>
                <input type="text" name="expTo" value={formVal} onChange={handleChange} placeholder="To"></input> 
            </form>

            <p className="headerText">Skills</p>
            <form className='skillsInp'>
                <label htmlFor='skill'></label>
                <input type="text" name="skill" value={formVal} onChange={handleChange} placeholder="Skill"></input>
            </form>

            <p className="headerText">Projects</p>
            <form className='projects'>
                <label htmlFor='projects'></label>
                <input type="text" name="projects" value={formVal} onChange={handleChange} placeholder="Project"></input>
            </form>

            <p className="headerText">Interests</p>
            <form className='interest'>
                <label htmlFor='interest'></label>
                <input type="text" name="interest" value={formVal} onChange={handleChange} placeholder="Interest"></input>
            </form>
        </div>
        
    )
}
}
export default Maker;