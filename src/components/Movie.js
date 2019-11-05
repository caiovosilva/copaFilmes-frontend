import {Jumbotron, Button, Card} from 'react-bootstrap';
import '../App.css'
import React, { Component } from 'react'

export default class Movie extends Component {
    state = {
        movie: null
    }
    render() {
        const movie = this.props.movie
        console.log(movie)
        return (
            <Card>
                <Card.Body>
                <Card.Title>{movie.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{movie.ano}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }
}
