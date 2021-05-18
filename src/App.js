import React, { Component } from 'react'

import './App.css';
import CardLists from './components/card-list/card-list';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      ) 
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange }/>
        <CardLists monsters={filteredMonster}/>
      </div>
    );
  }
}

export default App;
