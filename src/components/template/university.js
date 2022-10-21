import React, {Component} from "react";
import UniversityItem from "./universityItem";

class University extends Component {
    render() {
    const {university} = this.props;
    const uniItems = university.map((uniItem) => {
        return (
            <UniversityItem
            key={uniItem.id}
            id={uniItem.id}
            uniItem={uniItem}
            ></UniversityItem>
        )
    })

    return(
        <div>
            <p className="headerEdu">Education</p>
            <div className="hr"></div>
            {uniItems}
        </div>
    )}
}

export default University;