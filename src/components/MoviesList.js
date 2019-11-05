import React, { Component } from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import '../App.css'
import { Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Header from './Header'

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.cardClicked = this.cardClicked.bind(this);
    }

    state = {
        movies: [],
        cardCounter: 0,
        moviesSelectedCounter: 0,
        moviesSelected: []
    }

    cardClicked = (id) => {
        const moviesSelected = this.state.moviesSelected
        let movie = moviesSelected.find(obj => obj.id === id)
        if(movie === undefined) {
            movie = this.state.movies.find(obj => obj.id === id)
            if(movie != undefined) {
                if(moviesSelected.length < 8) {
                    moviesSelected.push(movie)
                    //nao marcar card
                }
                else
                    alert('Você já selecionou 8 filmes!')
            }
        }
        else {
            this.setState({ 
                moviesSelected: moviesSelected.filter(obj => obj.id != id)
            });
        }
        
    }

    componentDidMount() {  
        //  axios.get('https://gjnskjqty1.execute-api.sa-east-1.amazonaws.com/Prod/api/movies')
        axios.get('http://localhost:49274/api/movies')
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
                            {this.state.moviesSelected.length} de 8 Filmes
                        </div>
                    </div>
                    <div className="MovieList-title-spacer"></div>
                    <div className="MovieList-title-link">
                        <Link to="/result" className="ml-auto">
                            <Button fluid="true">GERAR MEU CAMPEONATO</Button>
                        </Link>
                    </div>  
                </div>
                <div className="movies">
                    <Row>
                        {this.state.movies.map( item => 
                            <Col sm="3" key={item.id}>
                                <Movie
                                    key={item.id}
                                    movie={item}
                                    onClick={this.cardClicked}
                                />
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        )
    }
}

