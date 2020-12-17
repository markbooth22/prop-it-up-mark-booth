import React, { Component } from "react"


class PersonCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            increaseAge: this.props.age,
        };
    }
    render() {
        const { firstName, lastName, age, hair } = this.props;
        return(
            <div>
                <h2>{ lastName }, { firstName }</h2>
                <p>Age: { this.state.increaseAge }</p>
                <p>Hair Color: { hair }</p>
                <button onClick={() => this.setState({increaseAge: this.state.increaseAge +1 })}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}
//help commitgit

export default PersonCard;