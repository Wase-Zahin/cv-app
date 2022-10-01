import React, {Component} from "react";

class Maker extends Component {
    constructor(props) {
      super(props);
    }

    render() {
    const {onSubmitForm, handleChange, formVal} = this.props;

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
                <button type="submit">Change</button>
            </form>

            <p className="headerText">Education</p>
            <form className='educationalInp'>
                <label htmlFor='university'></label>
                <input type="text" name="university" value={formVal} onChange={handleChange} placeholder="University"></input>
                <label htmlFor='city'></label>
                <input type="text" name="city" value={formVal} onChange={handleChange} placeholder="City"></input>
                <label htmlFor='degree'></label>
                <input type="text" name="degree" value={formVal} onChange={handleChange} placeholder="Degree"></input>
                <label htmlFor='sub'></label>
                <input type="text" name="sub" value={formVal} onChange={handleChange} placeholder="Subject"></input>
                <label htmlFor='from'></label>
                <input type="text" name="from" value={formVal} onChange={handleChange} placeholder="From"></input> 
                <label htmlFor='to'></label>
                <input type="text" name="to" value={formVal} onChange={handleChange} placeholder="To"></input> 
            </form>

            <p className="headerText">Experience</p>
            <form className='professionalInp'>
                <label htmlFor='position'></label>
                <input type="text" name="position" value={formVal} onChange={handleChange} placeholder="Position"></input>
                <label htmlFor='company'></label>
                <input type="text" name="company" value={formVal} onChange={handleChange} placeholder="Company"></input>
                <label htmlFor='city'></label>
                <input type="text" name="city" value={formVal} onChange={handleChange} placeholder="City"></input>
                <label htmlFor='from'></label>
                <input type="text" name="from" value={formVal} onChange={handleChange} placeholder="From"></input>
                <label htmlFor='to'></label>
                <input type="text" name="to" value={formVal} onChange={handleChange} placeholder="To"></input> 
            </form>
        </div>
        
    )
}
}
export default Maker;