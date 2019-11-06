import React from 'react'
import './App.css'
import Default from './components/Default'
import MoviesList from './components/MoviesList'
import Result from './components/Result'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={MoviesList}></Route>
          <Route 
            path="/result" 
            render={(props) => <Result {...props} />}
          />
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
