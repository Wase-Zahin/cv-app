import React, { Component } from "react";
import InterestsItem from "./interestsItem";

class Interests extends Component {
    render() {
        const {interests} = this.props;
        const interestsItems = interests.map((interestsItem) => {
            return (
                <InterestsItem
                key={interestsItem.id}
                id={interestsItem.id}
                interestsItem={interestsItem}
                ></InterestsItem>
            )
        })

        return (
            <div className="Interests">
                <p className="headerInterests">Interests</p><div className="hr"></div>
                {interestsItems}
            </div>
        )
    }
}

export default Interests;