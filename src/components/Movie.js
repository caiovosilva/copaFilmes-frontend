import {Card} from 'react-bootstrap';
import '../App.css'
import React, { Component } from 'react'

const movieStyle = {
    maxHeight: '140px',
    borderRadius: '0px',
    backgroundColor: 'gray',
    // backgroundImage: 'url(' + imgUrl + ')',
};

export default class Movie extends Component {
    state = {
        movie: null
    }

    handleClick() {
        this.props.onItemClick(this.state.movie.id);
    }
    
    componentWillMount() {
        this.setState({
            movie: this.props.movie
        })
    }
    // cardClicked: this.props.onItemClick

    render() {
        
        return (
            <a style={{ cursor: 'pointer' }} onClick={this.handleClick}>
                <Card style={movieStyle}>
                    <Card.Body >
                    <Card.Title>{this.state.movie.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.movie.ano}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </a>
        )
    }
}
