import {Card} from 'react-bootstrap';
import '../App.css'
import React, { Component } from 'react'



export default class Movie extends Component {
    constructor( props ){
        super( props );
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        isSelected: false,
        movie: this.props.movie,
        backgroundColor: 'white'
    }

    handleClick() {
        this.setState(prevState => ({
            backgroundColor: prevState.backgroundColor === 'white' ? 'grey' : 'white'
        }));
        this.props.onClick(this.state.movie.id);
    }

    render() {   
        return (
            <a style={{ cursor: 'pointer' }} onClick={this.handleClick}>
                <Card style={{
                        width: `${this.props.value}%`,
                        maxHeight: '140px',
                        borderRadius: '0px',
                        backgroundColor: this.state.backgroundColor,
                    }}>
                    <Card.Body >
                    <Card.Title>{this.state.movie.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.movie.ano}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </a>
        )
    }
}
