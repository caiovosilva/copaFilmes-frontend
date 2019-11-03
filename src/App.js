import React from 'react'
import './App.css'
import Default from './components/Default'
import MoviesList from './components/MoviesList'
import Result from './components/Result'
import { Switch, Route } from 'react-router-dom'
// const App = () => {
//   return (
//     <Jumbotron>
//       <h1>Olá!</h1>
//       <p>
//         Este é um exemplo do componente jumbotron construído com o react-bootstrap
//       </p>
//       <p>
//         <Button bsStyle="primary">Aprenda mais!</Button>
//       </p>
//     </Jumbotron>
//   )
// }
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={MoviesList}></Route>
          <Route path="/result" component={Result}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
      
      {/* <Container>
        <Row>
          <Col sm={1}>1</Col>
          <Col sm={3}>2</Col>
          <Col sm={1}>3</Col>
          <Col sm={6}>4</Col>
          <Col sm={1}>5</Col>
        </Row>
      </Container> */}


      




        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
