import React, { Component } from 'react'
import '../App.css'

export default class WinnersCard extends Component {
    render() {
        return (
            <div className="winners-card">
                <p className="winners-card-position">{this.props.position}</p>
                <p className="winners-card-title">{this.props.title}</p>
            </div>
        )
    }
}
