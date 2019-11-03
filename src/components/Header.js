import React, { Component } from 'react'
import {Jumbotron, Button, Container, Col, Row} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        //  const { id, titulo, ano } = this.props.movie
        return (
            <div>
                <Jumbotron fluid bsClass="jumbotron">
                    <h6 className="Header-grey">CAMPEONATO DE FILMES</h6>
                    <h2>{this.props.subTitle}</h2>
                    <h6 className="Header-grey Header-bold">__</h6>
                    <h6>{this.props.description}</h6>
                </Jumbotron>
            </div>
        )
    }
}
