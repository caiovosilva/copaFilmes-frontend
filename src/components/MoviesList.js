import React, { Component } from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import '../App.css'
import {Jumbotron, Button, Container, Col, Row, CardGroup} from 'react-bootstrap'
import axios from 'axios'
import Header from './Header'


export default class MoviesList extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res)
            this.setState({
                persons: res.data
            })
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
                    filmeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees
                </div>
                
                {/* <Movie></Movie> */}
                {/* {(value) => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }} */}
            </div>
        )
    }
}
