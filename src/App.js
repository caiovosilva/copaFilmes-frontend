import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron, Button} from 'react-bootstrap';

const App = () => {
  return (
    <Jumbotron>
      <h1>Olá!</h1>
      <p>
        Este é um exemplo do componente jumbotron construído com o react-bootstrap
      </p>
      <p>
        <Button bsStyle="primary">Aprenda mais!</Button>
      </p>
    </Jumbotron>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
