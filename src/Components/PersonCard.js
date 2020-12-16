import React, { Component } from "react"


class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hair } = this.props;
        return(
            <div>
                <h2>{ lastName }, { firstName }</h2>
                <p>Age: { age }</p>
                <p>Hair Color: { hair }</p>
            </div>
        )
    }
}
//help commitgit

export default PersonCard;