import React, { Component } from 'react'
import axios from 'axios'

export default class Result extends Component {
    state = {
        winners: null
    }

    componentDidMount () {
        const { movies } = this.props.location.state
        //  axios.get('https://gjnskjqty1.execute-api.sa-east-1.amazonaws.com/Prod/api/movies')
        axios.post('http://localhost:49274/api/championship', movies)
        .then((winners) => {
            console.log(winners)
            // this.setState({
            //     winners: res.data.winners
            // })
        })
        .catch((error) => {
            console.log(error)
        })
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
