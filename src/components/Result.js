import React, { Component } from 'react'
import axios from 'axios'

export default class Result extends Component {
    state = {
        winners: null
    }

    componentDidMount () {
        const { movies } = this.props.location.state
    
    }
    render() {
        console.log(this.props)
        return (
            <div>
                hello from result
            </div>
        )
    }
}
