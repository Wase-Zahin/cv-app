import React, { Component } from "react";

class InterestsItem extends Component {
    render() {
        const {interestsItem} = this.props;
        return (
            <div className="interestNames">
                <li>{interestsItem.interest || 'Your Interests'}</li>
            </div>
        )
    }
}

export default InterestsItem;