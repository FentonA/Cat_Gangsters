import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
//calls block of code when it renders data to the dom 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
    const {searchField, monsters} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Cat Gangsters</h1>
        <SearchBox
          placeholder = 'search cat monsters'
          handleChange ={ e => this.setState({searchField:e.target.value})
          }/>
        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
}
}
export default App;
