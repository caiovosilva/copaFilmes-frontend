import React, { Component } from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import '../App.css'
import {Jumbotron, Button, CardDeck, Row, Col, Card, CardGroup} from 'react-bootstrap'
import axios from 'axios'
import Header from './Header'

export default class MoviesList extends Component {
    state = {
        movies: []
    }

    componentDidMount() {  
         axios.get('https://gjnskjqty1.execute-api.sa-east-1.amazonaws.com/Prod/api/movies')
        .then((res) => {
            this.setState({
                movies: res.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        let cards;
        cards = Object.values(this.state.movies).map( card => (
                <Movie style={{flex:'4'}}
                    key={card.id} 
                    movie={card}
                    // clicked={() => this.showItemDetailHandler(card.id)} colocar aqui depois a função para selecionar os filmes
                />
            ) 
        )
        return (
            <div className="container">
                <div className="MovieList-header">
                    <Header 
                        subTitle={"Fase de Seleção"}
                        description={"Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir."}
                    />
                </div>
                <div className="MovieList-title">
                    <div className="MovieList-title-counter">
                        <div>
                            Selecionados
                        </div>
                        <div>
                            0 de 8 Filmes
                        </div>
                    </div>
                    <div className="MovieList-title-spacer"></div>
                    <div className="MovieList-title-link">
                        <Link to="/result" className="ml-auto">
                            <Button>GERAR MEU CAMPEONATO</Button>
                        </Link>
                    </div>  
                </div>
                <div className="movies">
                    <Row>
                        {this.state.movies.map( item => 
                            <Col sm="3">
                                <Movie
                                    key={item.id}
                                    movie={item} 
                                />
                            </Col>
                            
                        )}
                    </Row>
                </div>
            </div>
        )
    }
}
