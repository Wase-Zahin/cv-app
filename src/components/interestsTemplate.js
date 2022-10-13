import React, { Component } from "react";

class InterestsTemplate extends Component {
    render() {
        const {firstName, lastName, title, phoneNo, email, address} = this.props;

        return (
            <div className="Interests">
                <p className="headerInterests">Interests</p><div className="hr"></div>
                <div className="interestNames">
                    <li>your Interests</li>
                    <li>more Interests</li>
                </div>
            </div>
        )
    }
}

export default InterestsTemplate;