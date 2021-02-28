import React, { Component} from 'react';
import Seed from './seed';
import Table from './Table';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log(Seed.positions);
  }
/*
  render() {
    return(
      <Table 
        positions={Seed.positions}
      />
    )
  };
  */

  render() {
    return(
      <div>
        Hello, my name is Ashford.
      </div>
    );
  }

}
export default App;
