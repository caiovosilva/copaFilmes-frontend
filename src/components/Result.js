import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import WinnersCard from './WinnersCard'
import LoadingOverlay from 'react-loading-overlay';

export default class Result extends Component {
    state = {
        winnerTitle: null,
        secondTitle: null,
        loading: true
    }

    componentDidMount () {
        const { movies } = this.props.location.state
        axios.post('https://gjnskjqty1.execute-api.sa-east-1.amazonaws.com/Prod/api/championship', movies)
        .then((res) => {
            this.setState({
                winnerTitle: res.data[0].titulo,
                secondTitle: res.data[1].titulo,
                loading: false
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <LoadingOverlay active={this.state.loading} spinner >
                <div className="container">
                    <div className="MovieList-header">
                        <Header 
                            subTitle={"Resultado Final"}
                            description={"Veja o resultado final do Campeonato de filmes de forma simples e rápida."}
                        />
                    </div>
                    <div className="winners">
                            <WinnersCard position={'1º'} title={this.state.winnerTitle} />
                            <WinnersCard position={'2º'} title={this.state.secondTitle} />
                    </div>
                </div>
            </LoadingOverlay>
        )
    }
}
