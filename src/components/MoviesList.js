import React, { Component } from 'react'
import Movie from './Movie'
import Header from './Header'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class MoviesList extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Movie></Movie>
                <Link to="/result" className="ml-auto">
                    <Button>result</Button>
                </Link>
            </div>
        )
    }
}
