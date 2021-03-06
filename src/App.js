import './App.css'
import React, { Component } from 'react'
import CardList from './components/Card-list/Card-list.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster"
          onChange={e => {this.setState({ searchField: e.target.value })}/>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App
