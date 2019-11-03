import React, { Component } from 'react'
import '../App.css'
import {Jumbotron, Button, Container, Col, Row} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div className="headerr">
                <Jumbotron fluid bsClass="jumbotron">
                    <h6 className="Title">CAMPEONATO DE FILMES</h6>
                    <p>
                    Fase de Seleção
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
