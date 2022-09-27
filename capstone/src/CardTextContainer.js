import React , { Component } from 'react'
import CardText from './CardText'

class CardTextContainer extends Component {
    render() {
        return (
            <div id="text-container">
                <CardText />
                <CardText />
            </div>
        )
    };
}

export default CardTextContainer